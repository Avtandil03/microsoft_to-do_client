import { useAppDispatch, useAppSelector } from "../../app/store/store";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { increment } from "../../features/counter/counterSlice";


const homePage = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)
  return (
    <div className={styles.root}>
      <button onClick={() => dispatch(increment())}>{count}</button>
      <div className={styles.content}>
        <h1>this is home page</h1>
        <Link to='/auth' ><button>to auth</button></Link>
        <Link to='/settings' ><button>to settings</button></Link>
      </div>
    </div>
  );
};

export default homePage;