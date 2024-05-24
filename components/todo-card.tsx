import {
  createRandomDate,
  createRandomName,
  randomAvatar,
} from "@/utils/utility";
import Image from "next/image";
import Delete from "./svgs/delete";
import { Dispatch, SetStateAction } from "react";
import { Todo } from "@/utils/types";

export default function TodoCard({
  id,
  todo,
  type,
  setTodos,
}: {
  id: number;
  todo: string;
  type: string;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}) {
  const handleDelete = () => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          console.error(
            `HTTP error ${res.status} , caused by todo item created by us which dummyjson.com doesnt accept`
          );
        }
      })
      .finally(() => {
        setTodos((prev) => prev.filter((todoList) => todoList.id !== id));
      });
  };

  return (
    <li className="flex flex-col items-start justify-between gap-5 w-full border rounded-lg border-primary p-4 bg-primary drop-shadow-sm antialiased shadow-sm cursor-grab active:cursor-grabbing">
      <div className="flex flex-col gap-1 items-start justify-between">
        <h1
          className={`font-bold text-xl text-icon-outline text-pretty tracking-tight ${
            type === "completed"
              ? "text-red-500/80 line-through"
              : "text-blue-400"
          }`}
        >
          {todo}
        </h1>
        <div className="flex items-center gap-3 justify-evenly font-bold text-sm text-icon">
          <span suppressHydrationWarning>{createRandomDate()}</span>
          <span className="">⋅</span>
          <p className="font-bold text-sm text-icon">
            Created by{" "}
            <span
              suppressHydrationWarning
              className="font-bold text-sm text-icon-outline"
            >
              {createRandomName()}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full ">
        <Image
          src={randomAvatar()}
          width={24}
          height={24}
          alt="avatar"
          className="rounded-full"
        />
        <button
          onClick={handleDelete}
          className="hover:cursor-pointer transition-all ease-in-out duration-150 hover:text-red-500"
        >
          <Delete className="w-5 h-5 " />
        </button>
      </div>
    </li>
  );
}
