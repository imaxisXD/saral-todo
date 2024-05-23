import { cn } from "@/utils/utility";

export default function Tick({
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
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
