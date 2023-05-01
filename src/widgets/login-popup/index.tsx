import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss'
import { CloseBtn } from './../../shared/ui';

interface popupProps {
  closePopup: React.MouseEventHandler<HTMLButtonElement>
}


export const loginPopup = ({ closePopup }: popupProps) => {

  

  return (
    <div className={styles.loginPopup} >
      <div className={styles.header}>
        <p>Sign in</p>
        <div className={styles.closeBtnWrapper}><CloseBtn onClick={closePopup} /></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.content_title}>Let's get you signed in</h3>
        <div className={styles.socials}>
          <h5 className={styles.socials_title}>Use this account</h5>
          <div className={styles.social} onClick={e=>console.log(e)}>
            <img src="/src/widgets/assets/Gamil logo.svg" alt="microsoftLogo.svg" />
            <div className={styles.txtWrapper} >
              <p className={styles.social_title}>Sign in with email</p>
              <p className={styles.social_type}>Email</p>
            </div>
          </div>
          <div className={`${styles.social} ${styles.active }`}>
            <img src="/src/widgets/assets/Gamil logo.svg" alt="microsoftLogo.svg" />
            <div className={styles.txtWrapper}>
              <p className={styles.social_title}>Sign in with email</p>
              <p className={styles.social_type}>Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}