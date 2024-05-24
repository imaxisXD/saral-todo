import {
  createRandomDate,
  createRandomName,
  randomAvatar,
} from "@/utils/utility";
import Image from "next/image";

export default function TodoCard({
  todo,
  completed,
  type,
}: {
  todo: string;
  completed: boolean;
  type: string;
}) {
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
      <div className="flex items-center justify-between">
        <Image
          src={randomAvatar()}
          width={24}
          height={24}
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </li>
  );
}
