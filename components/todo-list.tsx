"use client";
import { Todo } from "@/utils/types";
import Plus from "./svgs/plus";
import TodoCard from "./todo-card";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";

export default function TodoList({
  data,
  title,
  buttonText,
}: {
  data: Todo[];
  title: string;
  buttonText: string;
}) {
  const [todoList, todos] = useDragAndDrop<HTMLUListElement, Todo>(data, {
    group: "todoList",

    plugins: [animations()],
  });

  return (
    <div className="flex flex-col items-start justify-start h-full w-1/2 gap-3">
      <div className="flex items-center justify-between gap-2 w-full">
        <h2 className="font-bold text-icon">{title}</h2>
        <button className="flex items-center gap-1 hover:bg-primary hover:text-icon p-1 rounded-md ease-linear transition-all duration-150 border border-transparent hover:border-icon">
          <Plus className="w-5 h-5" strokeWidth={2} />
          <span>{buttonText}</span>
        </button>
      </div>
      <ul
        ref={todoList}
        className="flex flex-col gap-4 w-full h-full overflow-y-auto no-scrollbar p-2 drop-shadow"
      >
        {todos.map((todo) => (
          <TodoCard todo={todo.todo} completed={todo.completed} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
