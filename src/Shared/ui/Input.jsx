import styles from "./Input.module.css";

export default function Input({ type = "text", placeholder, registration, value, onChange, onClear }) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={onChange}
        {...registration}
      />
      {value && onClear && (
        <span className={styles.clearBtn} onClick={onClear}>
          X
        </span>
      )}
    </div>
  );
}