"use client";

import { IconButton } from "./IconButton";
import { MoonIcon, SunIcon } from "../icons";

interface ThemeToggleButtonProps {
  darkMode: boolean;
  onToggle: () => void;
  size?: number;
}

export function ThemeToggleButton({ darkMode, onToggle, size }: ThemeToggleButtonProps) {
  return (
    <IconButton onClick={onToggle} size={size} aria-label="Toggle dark mode">
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
