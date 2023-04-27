import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import loginImg from './assets/Login.svg'

const authPage = () => {
  return (
    <div className={styles.loginPage} >
      <div className={styles.container} >
        <header className={styles.header}>
          <h1 className={styles.header_title}>Welcome to Microsoft To Do</h1>
          <img className={styles.header_img} src={loginImg} alt="Login.svg" />
          <button className={styles.signInBtn}>Sign in</button>
          <p className='max-w-[237px]  text-txt-gray mb-20 text-lg'>Sign in with a work, school, or Microsoft account</p>
        </header>

      </div>
      <img className='max-w-[100px] bottom-10 fixed' src="/src/assets/Illustrations/Microsoft/Microsoft.svg" alt="Microsoft.svg" />
    </div>
  );
};

export default authPage;