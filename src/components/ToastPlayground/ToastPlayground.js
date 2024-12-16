import React, { use, useEffect } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import  {ToastContext} from '../ToastProvider';
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const { toasts, addToast } = React.useContext(ToastContext);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        addToast({ message, variant });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [message, variant, toasts]);


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} onChange={(e)=>{setMessage(e.target.value)}}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((v) => {
              return (
                <label key={v} htmlFor={`variant-${v}`}>
                  <input
                    id={`variant-${v}`}
                    type="radio"
                    name="variant"
                    value={v}
                    onChange={() => setVariant(v)}
                    
                  />
                  {v}
                </label>
              )
            })}
           


          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => { 
              addToast( {message, variant}); 
            }}
            
            >Pop Toast!</Button>
          </div>
        </div>
      </div>
      <ToastShelf toasts={toasts}/>

    </div>
    
  );
}

export default ToastPlayground;
