import { generateMnemonic } from "bip39";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { p } from "framer-motion/client";

interface MnemonicDisplayProps {
  showMemonic: boolean;
  setShowMenmoinc: (value: boolean) => void;
  mnemonicWords: string[];
  copyToClipboard: (content: string) => void;
}

export function MnemonicDisplay({
  setShowMenmoinc,
  showMemonic,
  mnemonicWords,
  copyToClipboard,
}: MnemonicDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="group flex flex-col items-center gap-4 cursor-pointer rounded-lg border border-primary/10 p-8"
    >
      <div
        className="felx w-full justify-between items-center"
        onClick={() => {
          setShowMenmoinc(!showMemonic);
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold trakcing-tighter">
          Your Secret Pharse
        </h2>
        <Button
          onClick={() => setShowMenmoinc(!setShowMenmoinc)}
          variant="ghost"
        >
          {showMemonic ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </Button>
      </div>

      {showMemonic && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="flex flex-col w-full items-center justfy-center"
          onClick={() => copyToClipboard(mnemonicWords.join(" "))}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="grid grid-col-2 md:grid-col-4 gap-2 justify-center w-full items-center mx-auto my-8"
          >
            {mnemonicWords.map((word, index) => (
              <p
                key={index}
                className="md:text-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 rounded-lg p-4"
              >
                {word}
              </p>
            ))}
          </motion.div>
            <div className="text-sm md-text-base text-primary/50 flex w-full gap-2 items-center group-hover:text-primary/80 transition-all duration-300">
                <Copy className="size-4"/>
                Click Anywehre to copy
            </div>
        </motion.div>
      )}
    </motion.div>
  );
}
