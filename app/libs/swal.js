import Swal from "sweetalert2";

export const showSuccessAlert = (message) => {
    if (typeof window !== 'undefined') {
      Swal.fire({
        icon: 'success',
        title: message,
        timer: 3000
      });
    }
  };

  export const showErrorAlert = (message) => {
    if (typeof window !== 'undefined') {
      Swal.fire({
        icon: 'error',
        title: message,
        timer: 3000
      });
    }
  };