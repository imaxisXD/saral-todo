"use client";
import { useThemeConfig } from "@/hooks/use-theme-config";
import { themes } from "@/utils/theme";

export default function Home() {
  const [config, setConfig] = useThemeConfig();

  const theme = themes.find((theme) => theme.name === config.theme);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {themes.map((theme) => (
        <button
          key={theme.name}
          className="flex outline outline-offset-2 outline-1 outline-primary h-9 w-9 gap-1 items-center justify-center rounded-full border-2 text-xs"
          style={{
            backgroundColor: theme.name ? theme.color : "transparent",
          }}
          onClick={() => setConfig({ theme: theme.name })}
        >
          {theme.name}
        </button>
      ))}

      <div className="h-4 w-4 border border-black bg-primary"></div>
    </main>
  );
}
