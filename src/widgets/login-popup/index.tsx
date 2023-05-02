import { FC, useState } from 'react';
import styles from './styles.module.scss'
import { CloseBtn } from './../../shared/ui';
import { Socials } from '../../features';
import { singWays } from '../../features/types';

interface popupProps {
  closePopup: () => void
}

export const loginPopup: FC<popupProps> = ({ closePopup }) => {
  
  const [singWay, setSignWay] = useState(singWays.login)

  const handleContinue = () => {
    
  }

  return (
    <div className={styles.loginPopup} >
      <div className={styles.header}>
        <p>Sign in</p>
        <div className={styles.closeBtnWrapper}><CloseBtn onClick={closePopup} /></div>
      </div>
      <div className={styles.content}>
        <Socials signWay={singWay} passSignWay={setSignWay}/>
      </div>
      <button 
        className={styles.continueBtn}
        onClick={handleContinue}
      >Continue</button>
    </div>
  )
}