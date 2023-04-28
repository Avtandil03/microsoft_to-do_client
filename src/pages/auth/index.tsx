import styles from "./styles.module.scss";
import loginImg from './assets/Login.svg'
import microsoftIcon from './assets/Microsoft.svg'
import {LoginPopup} from '../../widgets';
import { useState } from "react";

const authPage = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className={styles.loginPage} >
      <div className={styles.container} >
        <header className={styles.header}>
          <h1 className={styles.header_title}>Welcome to Microsoft To Do</h1>
          <img className={styles.header_img} src={loginImg} alt="Login.svg" />
          <button className={styles.signInBtn} onClick={() => setIsShow(true)}>Sign in</button>
          <p className={styles.header_suggestion}>Sign in with a work, school, or Microsoft account</p>
        </header>

      </div>
      <img className={styles.microsoftIcon} src={microsoftIcon} alt="Microsoft.svg" />
      {isShow && <LoginPopup closePopup={() => setIsShow(false)}/>}
    </div>
  )
}

export default authPage;