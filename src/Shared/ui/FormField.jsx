import styles from "./FormField.module.css";
import Input from "./Input";
import ErrorMessage from "./ErrorMessage";

export default function FormField({ type, placeholder, registration, error, children }) {
  return (
    <div className={styles.formField}>
      <Input type={type} placeholder={placeholder} registration={registration}>
        {children}
      </Input>
      <ErrorMessage message={error?.message} />
    </div>
  );
}