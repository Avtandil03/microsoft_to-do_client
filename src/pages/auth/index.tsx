import styles from "./styles.module.scss";
import loginImg from './assets/Login.svg'
import microsoftIcon from './assets/Microsoft.svg'
import {LoginPopup} from '../../widgets';
import { useEffect, useState } from "react";
import { singWays } from "../../features/types";
import { LoginForm, RegistrationForm, Socials } from "../../features";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { setAreChoosen } from "../../features/sign-way/signWaySlice";
import { useLoginUserMutation, useRegistrationUserMutation } from "../../features/api/apiSlice";
import { setIsAuth } from "../../features/user/userSlice";

const authPage = () => {
  const dispatch = useAppDispatch()
  const [isShow, setIsShow] = useState(false)
  const {signWay, areChoosen} = useAppSelector((state) => state.chooseWay)
  const {user, isAuth} = useAppSelector((state) => state.user)
  const [registrationUser, registrationResult] = useRegistrationUserMutation()
  const [loginUser] = useLoginUserMutation()
  const [errorMessage, setErrorMessage] = useState('')
  const [suggestionMessage, setSuggestionMessage] = useState('')

  useEffect(() => {
    setErrorMessage('')
    setSuggestionMessage('')
  }, [singWays])
  

  const handleContinue = async() => {
    if(!areChoosen){
      dispatch(setAreChoosen(true))
      return
    }
    switch (signWay) {
      case singWays.registration:
        await registrationUser(user).unwrap().then((payload)=> {
          setErrorMessage('')
          localStorage.setItem('token', payload.accessToken)  
          setSuggestionMessage(`We have sent an activation link to your email ${user.email} .`)   
        }).catch((error) => {
          setErrorMessage(error.data.message)
        })
        break;
      case singWays.login:
        await loginUser(user).unwrap().then((payload)=> {
          localStorage.setItem('token', payload.accessToken)
          setErrorMessage('')         
          dispatch(setIsAuth(true))
        }).catch((error) => {
          setErrorMessage(error.data.message)
        })
        break;
    }
    
  }

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
      {isShow && 
        <LoginPopup closePopup={() => setIsShow(false)} handleContinue={handleContinue}>
          {registrationResult.isLoading && <button>Loading</button>}
          { !areChoosen ? <Socials/>
            : signWay === singWays.login ? <LoginForm/> 
            : signWay === singWays.registration ? <RegistrationForm/>
            : <button onClick={() => dispatch(setAreChoosen(false))}>Soon!</button>
          }
          {(errorMessage) && <p className={styles.errorMessage}>{errorMessage}</p>}
          {(suggestionMessage) && <p className={styles.suggestionMessage}>{suggestionMessage}</p>}
        </LoginPopup>
      }
    </div>
  )
}

export default authPage;