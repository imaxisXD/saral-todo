import { cn } from "@/utils/utility";

export default function ChevronDown({
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
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
