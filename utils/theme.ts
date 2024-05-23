export const themes = [
  {
    name: "rose",
    label: "Rose",
    color: "#fd6f8e",
  },
  {
    name: "yellow",
    label: "yellow",
    color: "#fac515",
  },
  {
    name: "gray-blue",
    label: "Gray Blue",
    color: "#4e5ba6",
  },
  {
    name: "moss",
    label: "Moss",
    color: "#86cb3c",
  },
  {
    name: "default",
    label: "Default",
    color: "#1f2938",
  },
] as const;

export type Theme = (typeof themes)[number];
