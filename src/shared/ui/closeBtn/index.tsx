import styles from './styles.module.scss'
import closeIcon from '../../assets/closeIcon.svg'
import React from 'react';

interface btnProps{
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const closeBtn = ({onClick}:btnProps) => {
  return (
    <button onClick={onClick} className={styles.closeBtn} title='close'>
      <img src={closeIcon} alt="closeIcon.svg" />
    </button>
  );
}

 