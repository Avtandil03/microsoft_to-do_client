import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { increment, decrement, incrementByAmount } from "../../features/counter/counterSlice";


const homePage = () => {

  const count = useAppSelector((state) => state.counter.value)

  const dispatch = useAppDispatch()

  return (
    <div className={styles.root}>
      <button onClick={() => dispatch(decrement())}>{count}</button>
      <div className={styles.content}>
        <h1>this is home page</h1>
        <Link to='/auth' ><button>to auth</button></Link>
        <Link to='/settings' ><button>to settings</button></Link>
      </div>
    </div>
  );
};

export default homePage;