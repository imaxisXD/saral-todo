"use client";
import { useThemeConfig } from "@/hooks/use-theme-config";
import { themes } from "@/utils/theme";
import { cn } from "@/utils/utility";
import Tick from "./svgs/tick";
export default function ThemeSwitcher() {
  const [config, setConfig] = useThemeConfig();
  const activeTheme = themes.find((theme) => theme.name === config.theme);

  return (
    <ul className="flex gap-2 justify-around py-3 px-3 w-full my-2">
      {themes.map((theme) => (
        <li key={theme.name}>
          <button
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-xs border "
            )}
            style={{
              backgroundColor: theme.name ? theme.color : "transparent",
            }}
            onClick={() => setConfig({ theme: theme.name })}
          >
            {activeTheme?.name === theme.name ? (
              <Tick
                stroke="#ffff"
                strokeWidth={2}
                className="bg-slate-400 text-white backdrop-blur-lg bg-opacity-30 rounded-full h-7 w-7 p-1"
              />
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
