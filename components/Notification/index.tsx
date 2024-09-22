import { useEffect } from "react";
import styles from "@/styles/Notification.module.scss";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  position?: "top-left" | "top-right" | "top-center";
  duration?: number;
  onClose: () => void;
}

export default function Notification({
  message,
  type,
  position = "top-right",
  duration = 3000,
  onClose,
}: NotificationProps) {
  useEffect(() => {
    // Close the notification after the specified duration
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, [duration, onClose]);

  return (
    <div
      className={`${styles.notification} ${styles[type]} ${styles[position]}`}
    >
      <span>{message}</span>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
    </div>
  );
}
