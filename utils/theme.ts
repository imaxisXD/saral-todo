export const themes = [
  {
    name: "rose",
    label: "Rose",
  },
  {
    name: "yellow",
    label: "Zinc",
  },
  {
    name: "gray-blue",
    label: "Gray Blue",
  },
  {
    name: "moss",
    label: "Moss",
  },
] as const;

export type Theme = (typeof themes)[number];
