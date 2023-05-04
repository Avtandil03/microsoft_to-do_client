import styles from "./styles.module.scss";
import { Link } from "react-router-dom";


const homePage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1>this is home page</h1>
        <Link to='/auth' ><button>to auth</button></Link>
        <Link to='/settings' ><button>to settings</button></Link>
      </div>
    </div>
  );
};

export default homePage;