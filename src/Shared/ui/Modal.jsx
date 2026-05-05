import styles from "./Modal.module.css";

export default function Modal({ title, children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBox}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}