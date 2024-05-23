import ChevronDown from "./svgs/chevron-down";

export default function SidebarHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center justify-center gap-2">
        <span className="bg-icon-outline rounded-md h-6 w-6" />
        <h1 className="font-bold tracking-tight">{title}</h1>
      </div>
      <ChevronDown className="h-6 w-6 text-icon p-1" />
    </div>
  );
}
