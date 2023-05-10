import { FC, ReactNode, useState } from 'react';
import styles from './styles.module.scss'
import { CloseBtn } from './../../shared/ui';
import { singWays } from '../../features/types';

interface popupProps {
  closePopup: () => void,
  handleContinue: () => void,
  children: ReactNode
}

export const loginPopup: FC<popupProps> = ({ closePopup, handleContinue, children }) => {

  return (
    <div className={styles.loginPopup} >
      <div className={styles.header}>
        <p>Sign in</p>
        <div className={styles.closeBtnWrapper}><CloseBtn onClick={closePopup} /></div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
      <button 
        className={styles.continueBtn}
        onClick={handleContinue}
      >Continue</button>
    </div>
  )
}