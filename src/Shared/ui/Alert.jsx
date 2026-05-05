import Swal from "sweetalert2";

export function confirmDelete(onConfirm) {
  Swal.fire({
    title: "Are you sure?",
    text: "This user will be deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
}