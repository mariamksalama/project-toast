import React,{ useEffect } from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts}) {


  return (
    <ol className={styles.wrapper}  role="region"
     aria-live="polite"
     aria-label="Notification">
      {toasts.map(({ message,variant, closeToast, id}) => {
      return (<li className={styles.toastWrapper} key={id}>
          <Toast key={id} variant={variant} message={message} closeToast={closeToast} />

      </li>);
      })}
    </ol>
  );
}

export default ToastShelf;
