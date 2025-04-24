import { useState } from 'react';

const useToast = () => {
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    isSuccess: true
  });

  const showToast = (message, isSuccess = true) => {
    setToast({
      visible: true,
      message,
      isSuccess
    });

    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3000);
  };

  return { toast, showToast };
};

export default useToast;