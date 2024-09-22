import { ReactNode, CSSProperties } from "react";
import styles from "@/styles/Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  maxWidthDesktop?: string;
  maxWidthMobile?: string;
  style?: CSSProperties; // Allow style extra
}

export default function Container({
  children,
  maxWidthDesktop = "450px",
  maxWidthMobile = "880px",
  style,
}: ContainerProps) {
  return (
    <div
      className={styles.container}
      style={
        {
          ...style,
          "--max-width-desktop": maxWidthDesktop,
          "--max-width-mobile": maxWidthMobile,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
