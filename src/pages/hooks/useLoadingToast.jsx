import { useToasterStore } from 'react-hot-toast';

export default function useLoadingToast() {
  const { toasts } = useToasterStore();
  const isLoading = toasts.some((toast) => toast.type === 'loading');
  return isLoading;
}
