import { useAppDispatch, useAppSelector } from '../../app/store/store'
import { setName, setEmail, setPassword } from '../user/userSlice'
import { gmailLogo} from '../assets'

import styles from './styles.module.scss'
import { setAreChoosen, setSignWay } from '../sign-way/signWaySlice'
import { singWays } from '../types'

export const registrationForm = () => {

  const { name, email, password, isNameValid, isEmailValid, isPasswordValid } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  return (
    <div className={styles.container}>
      <img src={gmailLogo} alt="gamil-logo.svg" />
      <h1>Login</h1>
      <div>
        <input className={isNameValid ? styles.isValid : ''}
          placeholder='Name or nickname '
          type="name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
      </div>
      <div>
        <input className={isEmailValid ? styles.isValid : ''} 
          placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
      </div>
      <div>
        <input className={isPasswordValid ? styles.isValid : ''}
          placeholder='Password'
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
      </div>
      <p>Already have account? <span onClick={() => dispatch(setSignWay(singWays.login))}>Sign in!</span> or use <span onClick={() => dispatch(setAreChoosen(false))}>other ways</span></p>
    </div>
  )
}
