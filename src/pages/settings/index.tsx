import styles from "./styles.module.scss";
import { Link } from "react-router-dom";


const settingsPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1>this is settings page</h1>
        <Link to='/'><button>to home</button></Link>
      </div>
    </div>
  );
};

export default settingsPage;