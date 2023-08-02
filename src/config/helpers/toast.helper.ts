import { toast } from 'react-hot-toast';

const dismiss = () => toast.dismiss();

const success = (message: string) => {
  dismiss();
  toast.success(message);
};

const error = (message: string) => {
  dismiss();
  toast.error(message);
};

const info = (message: string) => {
  dismiss();
  toast(message);
};

const loading = (message: string) => {
  dismiss();
  toast.loading(message);
};

const toastHelper = {
  success,
  error,
  info,
  loading,
};

export default toastHelper;
