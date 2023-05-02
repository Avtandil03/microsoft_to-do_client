import styles from './styles.module.scss'
import {closeIcon} from '../../assets'
import { FC } from 'react';

interface btnProps{
  onClick: () => void
}

export const closeBtn:FC<btnProps> = ({onClick}) => {
  return (
    <button onClick={onClick} className={styles.closeBtn} title='close'>
      <img src={closeIcon} alt="closeIcon.svg" />
    </button>
  );
}

 