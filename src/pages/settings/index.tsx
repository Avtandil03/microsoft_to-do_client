import { useAppDispatch } from "../../app/store/store";
import { useLogoutUserMutation } from "../../features/api/apiSlice";
import { resetUserData, setIsAuth } from "../../features/user/userSlice";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";


const settingsPage = () => {

  const [logoutUser] = useLogoutUserMutation()
  const dispatch = useAppDispatch()

  const handleClick = () => {
    logoutUser()
    localStorage.removeItem('token')
    dispatch(setIsAuth(false))
    dispatch(resetUserData())
  }
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <button onClick={handleClick}>logout</button>
        <h1>this is settings page</h1>
        <Link to='/'><button>to home</button></Link>
      </div>
    </div>
  );
};

export default settingsPage;