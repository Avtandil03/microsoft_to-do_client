import React, { FC, useState } from 'react';
import styles from './styles.module.scss'
import { CloseBtn } from './../../shared/ui';
import {gmailLogo, microsoftLogo, googleLogo} from '../assets/index'
interface popupProps {
  closePopup: React.MouseEventHandler<HTMLButtonElement>
}

export const loginPopup: FC<popupProps> = ({ closePopup }) => {

  const types = {
    emailLogin: 'emailLogin',
    emailRegistration: 'emailRegistration',
    google: 'google',
    microsoft: 'microsoft'
  }

  const [social, setSocial] = useState(types.emailLogin)

  return (
    <div className={styles.loginPopup} >
      <div className={styles.header}>
        <p>Sign in</p>
        <div className={styles.closeBtnWrapper}><CloseBtn onClick={closePopup} /></div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.content_title}>Let's get you signed in</h3>
        <div className={styles.socials}>
          <h5 className={styles.socials_title}>Use this way</h5>
          <div
            className={styles.social+ ' ' + (social === types.emailLogin && styles.active)}
            onClick={() => setSocial(types.emailLogin)}
          >
            <img src={gmailLogo} alt="GamilLogo.svg" />
            <div className={styles.txtWrapper} >
              <p className={styles.social_title}>Login with email</p>
              <p className={styles.social_type}>Email</p>
            </div>
          </div>
          <div
            className={styles.social+ ' ' + (social === types.emailRegistration && styles.active)}
            onClick={() => setSocial(types.emailRegistration)}
          >
            <img src={gmailLogo} alt="GamilLogo.svg" />
            <div className={styles.txtWrapper} >
              <p className={styles.social_title}>Create account with email</p>
              <p className={styles.social_type}>Email</p>
            </div>
          </div>
          
          <h5 className={styles.socials_title}>Use different way to sign in</h5>
          <div
            className={styles.social+ ' ' + (social === types.microsoft && styles.active)}
            onClick={() => setSocial(types.microsoft)}
          >
            <img src={microsoftLogo} alt="microsoftLogo.svg" />
            <div className={styles.txtWrapper} >
              <p className={styles.social_title}>Microsoft account</p>
              <p className={styles.social_type}>Email, phone, or Skype</p>
            </div>
          </div>
          <div
            className={styles.social+ ' ' + (social === types.google && styles.active)}
            onClick={() => setSocial(types.google)}
          >
            <img src={googleLogo} alt="googleLogo.svg" />
            <div className={styles.txtWrapper} >
              <p className={styles.social_title}>Google account</p>
              <p className={styles.social_type}>Email, phone</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.continueBtn}>Continue</button>
    </div>
  )
}