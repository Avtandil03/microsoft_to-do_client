import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { gmailLogo, microsoftLogo, googleLogo } from '../assets/index'
import { Social } from '../../shared/ui';
import { singWays } from '../../features/types';

interface socialsProps{
  signWay: string,
  passSignWay: (arg: string) => void
}

export const socialsContent:FC<socialsProps> = ({signWay, passSignWay}) => {

  return (
    <>
      <h3 className={styles.title}>Let's get you signed in</h3>
      <div className={styles.socials}>
        <h5 className={styles.socials_title}>Use this way</h5>
        <Social
          onClick={() => passSignWay(singWays.login)}
          isActive={signWay === singWays.login}
          logo={gmailLogo}
          describeTxt={{title:'Login with email', signWays:'Email'}}
        />
        <Social
          onClick={() => passSignWay(singWays.retgistration)}
          isActive={signWay === singWays.retgistration}
          logo={gmailLogo}
          describeTxt={{title:'Create account with email', signWays:'Email'}}
        />
        <h5 className={styles.socials_title}>Use different way to sign in</h5>
        <Social
          onClick={() => passSignWay(singWays.microsoft)}
          isActive={signWay === singWays.microsoft}
          logo={microsoftLogo}
          describeTxt={{title:'Microsoft account', signWays:'Email, phone, or Skype'}}
        />
        <Social
          onClick={() => passSignWay(singWays.google)}
          isActive={signWay === singWays.google}
          logo={googleLogo}
          describeTxt={{title:'Google account', signWays:'Email, phone'}}
        />
      </div>
    </>
  );
};
