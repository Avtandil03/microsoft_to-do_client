import { FC } from "react"
import styles from './styles.module.scss'

interface socialProps{
  isActive: boolean,
  onClick: () => void,
  logo: string,
  describeTxt:{
    title: string,
    signWays: string
  }
  
}

export const socialBlock:FC<socialProps> = ({isActive, onClick, logo, describeTxt }) => {
  return (
    <div
      className={`${styles.social} ${isActive && styles.active}`}
      onClick={onClick}
    >
      <img src={logo} alt="logo.svg" />
      <div className={styles.txtWrapper} >
        <p className={styles.social_title}>{describeTxt.title}</p>
        <p className={styles.social_signWays}>{describeTxt.signWays}</p>
      </div>
    </div>
  )
}
