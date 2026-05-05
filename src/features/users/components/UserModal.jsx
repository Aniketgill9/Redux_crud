import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUsers } from "../hooks/useUsers";

import Modal from "../../../Shared/ui/Modal";
import FormField from "../../../Shared/ui/FormField";
import Button from "../../../Shared/ui/Button";
import Loader from "../../../Shared/ui/Loader";
import styles from "../../../Shared/ui/Modal.module.css";

export default function UserModal({ close, editData }) {
  
  const { add, update, users } = useUsers();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  
  useEffect(() => {
    if (editData) {
      reset({
        name: editData.name,
        email: editData.email,
        password: editData.password,
      });
    } else {
      reset({
        name: "",
        email: "",
        password: "",
      });
    }
  }, [editData, reset]);

  
  const onSubmit = (formData) => {
    const isEmailAlreadyUsed = users.some(
      (user) =>
        user.email.toLowerCase() === formData.email.toLowerCase() &&
        user.id !== editData?.id
    );

    if (isEmailAlreadyUsed) {
      alert("This email is already registered!");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (editData) {
        update({ ...editData, ...formData });
      } else {
        add({ id: Date.now(), ...formData });
      }

      setIsLoading(false);
      reset();
      close();
    }, 1000);
  };

  
  if (isLoading) {
    return <Loader message="Please wait, User is adding..." />;
  }

  return (
    <Modal title={editData ? "Edit User" : "Add User"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          placeholder="Name"
          registration={register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
          })}
          error={errors.name}
        />

        <FormField
          placeholder="Email"
          registration={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter valid email",
            },
          })}
          error={errors.email}
        />

        <FormField
          placeholder="Password"
          type="password"
          registration={register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)/,
              message: "Must contain 1 uppercase & 1 number",
            },
          })}
          error={errors.password}
        />

        <div className={styles.modalButtons}>
          <Button type="submit" variant="success">
            {editData ? "Update" : "Submit"}
          </Button>
          <Button variant="secondary" onClick={close}>
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}