import { Dispatch, SetStateAction, useState } from "react";
import Plus from "./svgs/plus";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Todo } from "@/utils/types";

export default function AddTodoButton({
  buttonText,
  setTodos,
}: {
  buttonText: string;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}) {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleButtonClick = () => {
    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: task,
        completed: completed,
        userId: 5,
      }),
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      setTodos((prev) => [
        {
          id: Math.floor(Math.random() * (1000 - 191 + 1)) + 191,
          todo: task,
          completed: completed,
          userId: Math.floor(Math.random() * 100),
        },
        ...prev,
      ]);
      res.json();
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-1 hover:bg-primary hover:text-icon p-1 rounded-md ease-linear transition-all duration-150 border border-transparent hover:border-icon">
          <Plus className="w-5 h-5" strokeWidth={2} />
          <span>{buttonText}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium text-white">
            Add Todo
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="task"
              className="text-right text-base font-medium text-gray-100"
            >
              Task
            </label>
            <input
              onChange={(e) => setTask(e.target.value)}
              id="task"
              placeholder="Task"
              className="col-span-3 bg-transparent border p-1 rounded-md focus:ring-0 accent-transparent bg-slate-200 text-base font-medium"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="task-yes"
              className="text-right text-base font-medium text-gray-100"
            >
              Completed
            </label>

            <div className="col-span-3 flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  checked={completed === true}
                  onChange={() => setCompleted(true)}
                  id="task-yes"
                  name="task-completed"
                  type="radio"
                  value="true"
                  className="bg-transparent border p-1 rounded-md focus:ring-0 accent-transparent bg-slate-200 text-base font-medium"
                />

                <label
                  htmlFor="task-yes"
                  className="ml-2 text-base font-medium"
                >
                  Yes
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="task-no"
                  name="task-completed"
                  type="radio"
                  value="false"
                  checked={completed === false}
                  onChange={() => setCompleted(false)}
                  className="bg-transparent border p-1 rounded-md focus:ring-0 accent-transparent bg-slate-200 text-base font-medium"
                />

                <label htmlFor="task-no" className="ml-2 text-base font-medium">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <button
              onClick={handleButtonClick}
              type="submit"
              className="border-2 border-emerald-700 text-black text-sm bg-emerald-300 hover:bg-opacity-80 font-medium antialiased transition-all duration-150 ease-in-out px-3 py-1 rounded-md"
            >
              Add Task
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
