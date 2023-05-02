import { FC, useState } from 'react';
import styles from './styles.module.scss'
import { gmailLogo, microsoftLogo, googleLogo } from '../assets/index'
import { Social } from '../../shared/ui';

export const socialsContent: FC = () => {

  const types = {
    emailLogin: 'emailLogin',
    emailRegistration: 'emailRegistration',
    google: 'google',
    microsoft: 'microsoft'
  }

  const [social, setSocial] = useState(types.emailLogin)

  return (
    <>
      <h3 className={styles.title}>Let's get you signed in</h3>
      <div className={styles.socials}>
        <h5 className={styles.socials_title}>Use this way</h5>
        <Social
          onClick={() => setSocial(types.emailLogin)}
          isActive={social === types.emailLogin}
          logo={gmailLogo}
          describeTxt={{title:'Login with email', signWays:'Email'}}
        />
        <Social
          onClick={() => setSocial(types.emailRegistration)}
          isActive={social === types.emailRegistration}
          logo={gmailLogo}
          describeTxt={{title:'Create account with email', signWays:'Email'}}
        />
        <h5 className={styles.socials_title}>Use different way to sign in</h5>
        <Social
          onClick={() => setSocial(types.microsoft)}
          isActive={social === types.microsoft}
          logo={microsoftLogo}
          describeTxt={{title:'Microsoft account', signWays:'Email, phone, or Skype'}}
        />
        <Social
          onClick={() => setSocial(types.google)}
          isActive={social === types.google}
          logo={googleLogo}
          describeTxt={{title:'Google account', signWays:'Email, phone'}}
        />
      </div>
    </>
  );
};
