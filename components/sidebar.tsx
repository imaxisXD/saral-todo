import SidebarHeader from "./sidebar-header";
import SidebarRoutes from "./sidebar-routes";
import Analytics from "./svgs/analytics";
import Notification from "./svgs/notification";
import Settings from "./svgs/settings";
import Square from "./svgs/square";
import ThemeSwitcher from "./theme-switcher";

export default function Sidebar() {
  return (
    <nav className="p-6 pb-4 min-w-80 min-h-full bg-primary drop-shadow-sm flex flex-col gap-8">
      <SidebarHeader title="Company" />
      <div className="flex flex-col gap-1 h-full justify-between">
        <div className="flex flex-col gap-1">
          <SidebarRoutes title="Tasks" number={4}>
            <Square className="w-6 h-6" />
          </SidebarRoutes>
          <SidebarRoutes title="Notifications" number={7}>
            <Notification className="w-6 h-6" />
          </SidebarRoutes>
          <SidebarRoutes title="Analytics">
            <Analytics className="w-6 h-6" />
          </SidebarRoutes>
          <SidebarRoutes title="Team" number={2}>
            <Square className="w-6 h-6" />
          </SidebarRoutes>
        </div>

        <div>
          <ThemeSwitcher />
          <SidebarRoutes title="Settings" number={2}>
            <Settings className="w-6 h-6" />
          </SidebarRoutes>
        </div>
      </div>
    </nav>
  );
}
