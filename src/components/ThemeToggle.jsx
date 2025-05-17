import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full",
        "transition-all duration-500 ease-in-out",
        "backdrop-blur-sm shadow-md",
        isDarkMode
          ? "bg-yellow-200/20 hover:bg-yellow-200/30 ring-2 ring-yellow-300"
          : "bg-blue-200/20 hover:bg-blue-200/30 ring-2 ring-blue-500"
      )}
    >
      {isDarkMode ? (
        <Sun
          className="h-6 w-6 text-yellow-400 drop-shadow-glow transition-transform duration-300 hover:rotate-12"
          strokeWidth={2}
        />
      ) : (
        <Moon
          className="h-6 w-6 text-blue-800 drop-shadow-glow transition-transform duration-300 hover:-rotate-12"
          strokeWidth={2}
        />
      )}
    </button>
  );
};
