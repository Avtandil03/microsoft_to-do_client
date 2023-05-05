import { useAppDispatch, useAppSelector } from "../../app/store/store";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { increment } from "../../features/counter/counterSlice";
import { setEmail, setName, setPassword } from "../../features/user/userSlice";
import { useRegistrationUserMutation } from "../../features/api/apiSlice";


const homePage = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)
  const [ registrationUser, {isError, isLoading, error} ] = useRegistrationUserMutation()
  const user = useAppSelector((state) => state.user)
  const { name, email, password } = user

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    registrationUser(user)
  }


  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <div>
          {isLoading && <button>loading</button>}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              dispatch(setName(e.target.value))
              console.log(import.meta.env.SERVER_URL);
              
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        <button type="submit">Register</button>
      </form>
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