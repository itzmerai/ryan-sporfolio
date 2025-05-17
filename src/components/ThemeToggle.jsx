import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ setIsDarkMode }) => {
  const [internalDark, setInternalDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setInternalDark(true);
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      setInternalDark(false);
      setIsDarkMode(false);
    }
  }, [setIsDarkMode]);

  const toggleTheme = () => {
    const newTheme = !internalDark;
    setInternalDark(newTheme);
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full",
        "transition-all duration-500 ease-in-out",
        "backdrop-blur-sm shadow-md",
        internalDark
          ? "bg-yellow-200/20 hover:bg-yellow-200/30 ring-2 ring-yellow-300"
          : "bg-blue-200/20 hover:bg-blue-200/30 ring-2 ring-blue-500"
      )}
    >
      {internalDark ? (
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
