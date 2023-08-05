import { LoginForm } from '@/components/login-form'
import { RegisterForm } from '@/components/register-form'
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
      className=" hover:bg-slate-900 transition-colors border-transparent  border hover:border-gray-600"
      onClick={() => {
        setCurrWindow(MODAL_CONTEN_TYPE.CHOOSE)
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-3 w-4 h-6"
      >
        <g clipPath="url(#clip0_21_5803)">
          <path
            d="M11.5313 5.53125H1.60412L3.24859 3.89475C3.43208 3.71212 3.43278 3.41533 3.25016 3.23184C3.06753 3.04833 2.77072 3.04765 2.58723 3.23025L0.137915 5.66775C0.137751 5.66789 0.137634 5.66805 0.137493 5.66819C-0.0455302 5.85082 -0.0461161 6.14857 0.137446 6.3318C0.13761 6.33194 0.137728 6.33211 0.137868 6.33225L2.58718 8.76975C2.77065 8.95233 3.06746 8.95169 3.25011 8.76815C3.43274 8.58466 3.43203 8.28787 3.24854 8.10525L1.60412 6.46875H11.5313C11.7901 6.46875 12 6.25889 12 6C12 5.74111 11.7901 5.53125 11.5313 5.53125Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_21_5803">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
  const modalContents = {
    [MODAL_CONTEN_TYPE.EMAIL_LOGIN]: (
      <div>
        <Back />
        <LoginForm />
      </div>
    ),
    [MODAL_CONTEN_TYPE.EMAIL_REGISTER]: (
      <div>
        <Back />
        <RegisterForm />
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
        height={221.41}
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
