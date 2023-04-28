import React from 'react';
import styles from './styles.module.scss'
import { CloseBtn } from './../../shared/ui';

interface popupProps{
  closePopup: React.MouseEventHandler<HTMLButtonElement>
}


export const loginPopup = ({closePopup}: popupProps) => {

  return (
    <div className={styles.loginPopup} >
      <div className={styles.header}>
        <p>Sign in</p>
        <div className={styles.closeBtnWrapper}><CloseBtn onClick={closePopup}/></div>        
      </div>
    </div>
  )
}