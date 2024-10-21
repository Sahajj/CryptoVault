"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  return (
    <div className="flex items-center gap-2 pt-1.5 ">
      <Sun
        className={`h-5 w-5 ${isDark ? "text-primary/50" : "text-primary"}`}
      />

      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />

      <Moon
        className={`h-5 w-5 ${isDark ? "text-primary" : "text-primary/50"}`}
      />
    </div>
  );
}
