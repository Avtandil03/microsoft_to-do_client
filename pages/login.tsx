import { UiLoginModal } from '@/components/ui/ui-login-modal'
import Image from 'next/image'
import type { ReactElement } from 'react'
import { useState } from 'react'

interface ILoginPageLayout {
  onClick: () => void
  loginModal: ReactElement
}

export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <LoginPageLayout
      onClick={() => setIsOpen(true)}
      loginModal={
        <UiLoginModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div></div>
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
        src="/microsoft-logo.svg"
        width={100}
        height={0}
        alt="LoginImage"
      />
      {loginModal}
    </div>
  )
}
