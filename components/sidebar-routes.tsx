import Square from "./svgs/square";

export default function SidebarRoutes({
  title,
  number,
  children,
}: {
  title: string;
  number?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex text-icon hover:text-icon-outline items-center w-full justify-between transition-all ease-in-out duration-150 hover:bg-secondary py-3 px-0.5 rounded-lg group">
      <div className="flex items-center justify-center gap-2">
        {children}
        <span>{title}</span>
      </div>
      {number ? (
        <span className="font-medium text-xs p-2 py-1 mr-1 group-hover:text-white group-hover:bg-icon-outline bg-secondary rounded-lg transition-all ease-in-out duration-150">
          {number}
        </span>
      ) : null}
    </div>
  );
}
