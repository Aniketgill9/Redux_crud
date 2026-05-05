import Modal from "../../../Shared/ui/Modal";
import Button from "../../../Shared/ui/Button";
import styles from "../../../Shared/ui/Modal.module.css";

export default function UserViewModal({ user, close }) {
  return (
    <Modal title="User Details">
      <div className="view-details">
        <p>
          <strong>Name :</strong> {user.name}
        </p>

        <p>
          <strong>Email :</strong> {user.email}
        </p>
      </div>

      <div className={styles.modalButtons}>
        <Button variant="primary" onClick={close}>
          Close
        </Button>
      </div>
    </Modal>
  );
}