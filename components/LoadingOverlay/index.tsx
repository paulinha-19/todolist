import styles from "@/styles/LoadingOverlay.module.scss";
import overlay from "@/styles/Modal.module.scss"

interface LoadingOverlayProps {
  message: string;
}

export default function LoadingOverlay({ message }: LoadingOverlayProps) {
  return (
    <div className={overlay.overlay}>
      <div className={styles.loadingContainer}>
        <p className={styles.loadingMessage}>
          {message}
          <span className={styles.dots}>...</span>
        </p>
      </div>
    </div>
  );
}
