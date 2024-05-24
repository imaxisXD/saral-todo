"use client";
import { Todo } from "@/utils/types";
import TodoCard from "./todo-card";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations, handleEnd } from "@formkit/drag-and-drop";
import AddTodoButton from "./add-todo-button";
import ClearAllTodoButton from "./clear-all-todo-button";

export default function TodoList({
  data,
  title,
  buttonText,
}: {
  data: Todo[];
  title: string;
  buttonText: string;
}) {
  const [todoList, todos, setTodos] = useDragAndDrop<HTMLUListElement, Todo>(
    data,
    {
      group: "todoList",
      handleEnd(data) {
        const todoId = data.targetData.node.data.value.id;
        const completed = data.targetData.node.data.value.completed;

        fetch(`https://dummyjson.com/todos/${todoId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            completed: !completed,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error ${response.status}`);
            }
            setTodos((prev) =>
              prev.map((todo) =>
                todo.id === todoId
                  ? { ...todo, completed: !todo.completed }
                  : todo
              )
            );
            return response.json();
          })
          .catch((e) => console.error("Error: ", e));
        handleEnd(data);
      },
      plugins: [animations()],
    }
  );

  return (
    <div className="flex flex-col items-start justify-start h-full w-1/2 gap-3">
      <div className="flex items-start justify-between gap-2 w-full px-1 h-10 ">
        <h2 className="font-bold text-icon p-1">{title}</h2>
        {title === "INCOMPLETE" ? (
          <AddTodoButton buttonText={buttonText} setTodos={setTodos} />
        ) : (
          <ClearAllTodoButton buttonText={buttonText} setTodos={setTodos} />
        )}
      </div>
      <ul
        ref={todoList}
        className={`flex flex-col gap-4 w-full h-full overflow-y-auto no-scrollbar p-2 drop-shadow`}
      >
        {todos.map((todo) => (
          <TodoCard
            todo={todo.todo}
            key={todo.id}
            id={todo.id}
            setTodos={setTodos}
            type={title === "INCOMPLETE" ? "incomplete" : "completed"}
          />
        ))}
      </ul>
    </div>
  );
}
