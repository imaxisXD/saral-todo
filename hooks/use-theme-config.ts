import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Theme } from "@/utils/theme";

type ThemeConfig = {
  theme: Theme["name"];
};

const themeAtom = atomWithStorage<ThemeConfig>("theme", {
  theme: "default",
});

export function useThemeConfig() {
  return useAtom(themeAtom);
}
