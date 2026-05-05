import styles from "./IconButton.module.css";

export default function IconButton({ icon, tooltip, onClick, className }) {
  return (
    <span className={styles.tooltip}>
      <span className={`${styles.icon} ${styles[className]}`} onClick={onClick}>
        {icon}
      </span>
      <span className={styles.tooltipText}>{tooltip}</span>
    </span>
  );
}