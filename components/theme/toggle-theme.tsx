"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "../ui/button";
import { useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [themeValue, setThemeValue] = useState<any>(theme);

  const changeTheme = () => {
    setTheme(themeValue == "light" ? "dark" : "light");
    setThemeValue(themeValue == "light" ? "dark" : "light");
  };

  return (
    <div className="">
      <div className="">
        <Button
          variant="outline"
          size="icon"
          onClick={changeTheme}
          className="border-0 bg-inherit dark:bg-background"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </div>
  );
}
