import { ThemeToggle } from "./ui/ThemeToggle";
import { Box } from "lucide-react";
export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex item-center gap-2">
        <Box className="size-8" />
        <div className="felx flex-col gap-4">
          <span className="tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center">
            CryptoVault{" "}
            <span className="rounded-full text-base bg-primary/10 border border-primary/50 px-2">
              v1.1
            </span>
          </span>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  );
}
