import { Todo } from "@/utils/types";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";

export default function ClearAllTodoButton({
  buttonText,
  setTodos,
}: {
  buttonText: string;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}) {
  return (
    <button
      onClick={() => setTodos([])}
      className="flex items-center gap-1 hover:bg-primary hover:text-icon p-1 rounded-md ease-linear transition-all duration-150 border border-transparent hover:border-icon"
    >
      <Cross2Icon
        className="h-5 w-5 rounded-full border-red-500 text-red-700"
        strokeWidth={0.5}
        stroke="red"
      />
      <span className="text-sm font-medium">{buttonText}</span>
    </button>
  );
}
