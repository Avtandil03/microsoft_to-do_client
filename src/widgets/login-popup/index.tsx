import { FC, useState } from 'react';
import styles from './styles.module.scss'
import { CloseBtn } from './../../shared/ui';
import { Socials } from '../../features';

interface popupProps {
  closePopup: () => void
}

export const loginPopup: FC<popupProps> = ({ closePopup }) => {

  const [logState, setLogState] = useState()

  return (
    <div className={styles.loginPopup} >
      <div className={styles.header}>
        <p>Sign in</p>
        <div className={styles.closeBtnWrapper}><CloseBtn onClick={closePopup} /></div>
      </div>
      <div className={styles.content}>
        <Socials/>
      </div>
      <button className={styles.continueBtn}>Continue</button>
    </div>
  )
}