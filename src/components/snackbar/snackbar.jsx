import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Snackbar = () => {
  const snackBarListenerEvent = (event = {}) => {
    const { detail } = event
    switch (detail.type) {
      case 'error-snackbar':
        return toast.error(detail.message, {
          position: toast.POSITION.TOP_CENTER
        });
      case 'success-snackbar':
        return toast.success(detail.message, {
          position: toast.POSITION.TOP_CENTER
        });
      default:
        return null
    }
  }

  useEffect(() => {
    document.addEventListener('snackbar', snackBarListenerEvent);
    return () => document.removeEventListener('snackbar', snackBarListenerEvent);
  }, [])

  return <ToastContainer />
};
