import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Streams-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("Streams-theme", theme);
    set({ theme });
  },
}));