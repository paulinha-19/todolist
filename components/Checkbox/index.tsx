import styles from "@/styles/Checkbox.module.scss";
import Image from "next/image";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

export default function Checkbox({ checked, onChange, disabled }: CheckboxProps) {
  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      {checked && (
        <Image
          src="/checked.svg"
          alt="Checked"
          className={styles.checkIcon}
          width={14}
          height={14}
        />
      )}
    </div>
  );
}
