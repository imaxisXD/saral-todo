import TodoList from "@/components/todo-list";
import { TodoData } from "@/utils/types";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/todos");
  const data: TodoData = await response.json();

  const doneList = data.todos.filter((todo) => todo.completed);
  const todos = data.todos.filter((todo) => !todo.completed);

  return (
    <main className="flex-auto flex w-2/3 min-h-screen h-screen gap-4 bg-secondary items-start justify-between p-8">
      <TodoList data={todos} title="INCOMPLETE" buttonText="Add" />
      <TodoList data={doneList} title="COMPLETE" buttonText="Clear All" />
    </main>
  );
}
