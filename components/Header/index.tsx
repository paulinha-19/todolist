import styles from "@/styles/Header.module.scss";
import { FormattedDate } from "@/utils/formatted-date";
import Image from "next/image";

interface HeaderProps {
  username: string;
}

export const Header = ({ username }: HeaderProps) => {
  const formattedDate = FormattedDate();

  return (
    <div>
      <header className={styles.header}>
        <Image src="/logo.png" width={150} height={36} alt="logo" aria-label="logo" />
        <div className={styles.welcome}>Bem-vindo de volta, {username}</div>
        <div className={styles.date}>{formattedDate}</div>
      </header>
      <hr className={styles.divider} />
    </div>
  );
};
