"use client";
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
export default function Home() {
  const todoItems = [
    "Schedule perm",
    "Rewind VHS tapes",
    "Make change for the arcade",
    "Get disposable camera developed",
    "Learn C++",
    "Return Nintendo Power Glove",
  ];
  const doneItems = ["Pickup new mix-tape from Beth"];

  const [todoList, todos] = useDragAndDrop<HTMLUListElement, string>(
    todoItems,
    {
      group: "todoList",
      plugins: [animations()],
    }
  );
  const [doneList, dones] = useDragAndDrop<HTMLUListElement, string>(
    doneItems,
    {
      group: "todoList",
      plugins: [animations()],
    }
  );
  return (
    <main className="flex w-full min-h-screen gap-2 bg-secondary items-start justify-between p-8">
      <div className="flex flex-col items-start justify-start h-full w-1/2 border border-dotted border-sky-500">
        <h2 className="font-bold text-icon">INCOMPLETE</h2>
        <ul ref={todoList}>
          {todos.map((todo) => (
            <li className="kanban-item" key={todo}>
              {todo}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start justify-start h-full w-1/2 border border-dotted border-sky-500">
        <h1 className="font-bold text-icon">COMPLETE</h1>
        <ul ref={doneList}>
          {dones.map((done) => (
            <li className="kanban-item" key={done}>
              {done}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
