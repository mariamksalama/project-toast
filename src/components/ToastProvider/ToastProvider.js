import React from 'react';
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
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        console.log('Escape key pressed');
        setToasts([]);
      }
    }
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
