import styles from "./Loader.module.css";

const Loader = ({ message = "Please wait..." }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.box}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Loader;