import { UiLoginModal } from '@/components/ui/ui-login-modal'
import { SocialLoginWay } from '@/components/ui/ui-social-login-way'
import Image from 'next/image'
import type { ReactElement } from 'react'
import { useState } from 'react'

interface ILoginPageLayout {
  onClick: () => void
  loginModal: ReactElement
}

const SIGN_WAYS = {
  EMAIL_LOGIN: 'EMAIL_LOGIN',
  EMAIL_REGISTER: 'EMAIL_REGISTER',
  MICROSOFT: 'MICROSOFT',
  MICROSOFT_CORPO: 'MICROSOFT_CORPO',
}

const MODAL_CONTEN_TYPE = {
  CHOOSE: 'CHOOSE',
  ...SIGN_WAYS,
}

export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [choosenWay, setChoosenWay] = useState(SIGN_WAYS.EMAIL_LOGIN)
  const [currWindow, setCurrWindow] = useState(MODAL_CONTEN_TYPE.CHOOSE)

  function handleSocialClick(signWay: string) {
    setChoosenWay(signWay)
  }

  const Back = () => (
    <button
      className="border border-blue-300 hover:bg-slate-400"
      onClick={() => {
        console.log(currWindow)
        setCurrWindow(MODAL_CONTEN_TYPE.CHOOSE)
      }}
    >
      back
    </button>
  )
  const modalContents = {
    [MODAL_CONTEN_TYPE.EMAIL_LOGIN]: (
      <div>
        <Back />
        <div>login formbu </div>
      </div>
    ),
    [MODAL_CONTEN_TYPE.EMAIL_REGISTER]: (
      <div>
        <Back />
        <div>register form </div>
      </div>
    ),
    [MODAL_CONTEN_TYPE.MICROSOFT_CORPO]: (
      <div>
        <Back />
        <div>Soon </div>
      </div>
    ),
    [MODAL_CONTEN_TYPE.MICROSOFT]: (
      <div>
        <Back />
        <div>Soon </div>
      </div>
    ),
    [MODAL_CONTEN_TYPE.CHOOSE]: (
      <UiLoginModal.SignWays
        onContinue={() => {
          setCurrWindow(choosenWay)
        }}
        preferWay={
          <>
            <SocialLoginWay
              onClick={handleSocialClick}
              areChoosen={choosenWay === SIGN_WAYS.EMAIL_LOGIN}
              logoSrc="/gmail-logo.svg"
              signWay={SIGN_WAYS.EMAIL_LOGIN}
              title="Login with email"
              subtitle="Email"
            />
            <SocialLoginWay
              onClick={handleSocialClick}
              areChoosen={choosenWay === SIGN_WAYS.EMAIL_REGISTER}
              logoSrc="/gmail-logo.svg"
              signWay={SIGN_WAYS.EMAIL_REGISTER}
              title="Register with email"
              subtitle="Email"
            />
          </>
        }
      >
        <SocialLoginWay
          onClick={handleSocialClick}
          areChoosen={choosenWay === SIGN_WAYS.MICROSOFT_CORPO}
          logoSrc="/microsoft-logo.svg"
          signWay={SIGN_WAYS.MICROSOFT_CORPO}
          title="Work or school account"
          subtitle="Assigned by your organization"
        />
        <SocialLoginWay
          onClick={handleSocialClick}
          areChoosen={choosenWay === SIGN_WAYS.MICROSOFT}
          logoSrc="/microsoft-logo.svg"
          signWay={SIGN_WAYS.MICROSOFT}
          title="Microsoft account"
          subtitle="Email, phone, or Skype."
        />
      </UiLoginModal.SignWays>
    ),
  }

  return (
    <LoginPageLayout
      onClick={() => setIsOpen(true)}
      loginModal={
        <UiLoginModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {modalContents[currWindow]}
        </UiLoginModal>
      }
    />
  )
}

const LoginPageLayout: React.FC<ILoginPageLayout> = ({
  onClick,
  loginModal,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-[#eee] text-black">
      <h1 className="sm:text-4xl xs:text-2xl font-light mb-10 text-center">
        Welcome to Microsoft To Do
      </h1>
      <Image
        className="mb-9 sm:w-[308px] xs:w-52 w-40"
        src="/login-bg.svg"
        width={308}
        height={0}
        alt="LoginImage"
      />
      <button
        title="sing in"
        onClick={onClick}
        className="text-white bg-[#436af2] h-8 xs:w-64 px-9 text-sm mb-5 hover:blur-0 active:scale-[99%]"
      >
        Sign in
      </button>
      <p className="max-w-[250px] xs:text-lg leading-[22px] text-center text-[#656565] mb-20 ">
        Sign in with a work, school, or Microsoft account{' '}
      </p>
      <Image
        className="max-w-[98px] fixed xs:bottom-9 bottom-3"
        src="/microsoft-logo-with-text.svg"
        width={100}
        height={0}
        alt="LoginImage"
      />
      {loginModal}
    </div>
  )
}
