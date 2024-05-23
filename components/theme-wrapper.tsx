"use client";
import { useThemeConfig } from "@/hooks/use-theme-config";
import { cn } from "@/utils/utility";
import "@/app//globals.css";
import "@/app/themes.css";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const [config] = useThemeConfig();

  return (
    <div
      className={cn(
        `theme-${config.theme || defaultTheme}`,
        "w-full flex justify-start",
        className
      )}
    >
      {children}
    </div>
  );
}
