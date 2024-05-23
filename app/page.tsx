"use client";
import { useThemeConfig } from "@/hooks/use-theme-config";
import { themes } from "@/utils/theme";

export default function Home() {
  const [config] = useThemeConfig();
  const theme = themes.find((theme) => theme.name === config.theme);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {config.theme}
      <div className="h-4 w-4 border border-black bg-primary"></div>
    </main>
  );
}
