import { cn } from "@/utils/utility";

export default function Plus({
  ...props
}: {
  strokeWidth?: number;
  stroke?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={props.strokeWidth || 1.5}
      stroke={props.stroke || "currentColor"}
      className={cn("w-5 h-5", props.className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
