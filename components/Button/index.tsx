import styles from "@/styles/Button.module.scss";
import { CSSProperties } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "error";
  disabled?: boolean;
  style?: CSSProperties;
}

export default function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  style = {},
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {label}
    </button>
  );
}
