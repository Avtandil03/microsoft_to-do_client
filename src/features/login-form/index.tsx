import { useAppDispatch, useAppSelector } from '../../app/store/store'
import { setEmail, setPassword } from '../user/userSlice'
import {gmailLogo} from '../assets'

import styles from './styles.module.scss'
import { setAreChoosen, setSignWay } from '../sign-way/signWaySlice'
import { singWays } from '../types'

export const loginForm = () => {

  const { email, password } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  return (
    <div className={styles.container}>
      <img src={gmailLogo} alt="gamil-logo.svg" />
      <h1>Login</h1>
      <div>
        <input 
          placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
      </div>
      <div>
        <input
          placeholder='Password'
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
      </div>
      <p>No account? <span onClick={() => dispatch(setSignWay(singWays.retgistration))}>Create one!</span> or use <span onClick={() => dispatch(setAreChoosen(false))}>other ways</span></p>
    </div>
  )
}
