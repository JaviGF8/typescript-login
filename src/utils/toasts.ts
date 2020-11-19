import { toast } from 'react-toastify';

const options = {
  className: 'custom-toast',
  position: toast.POSITION.TOP_RIGHT,
};

/**
 * Shows a Success toast
 * @param {string} message text to show
 */
export const showSuccessToast = (message: string): void => {
  toast.success(message, {
    ...options,
    className: `${options.className} toast-success`,
  });
};

/**
 * Shows a Error toast
 * @param {string} message text to show
 */
export const showErrorToast = (message: string): void => {
  toast.error(message, {
    ...options,
    className: `${options.className} toast-error`,
  });
};


