import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';
export const ToastContext = React.createContext();
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const addToast = ({message, variant}) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, variant, closeToast: () => removeToast(id) }]);
  };
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };
  useEscapeKey(()=>{setToasts([])});

  
    
  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
