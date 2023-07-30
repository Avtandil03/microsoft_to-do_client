import Image from 'next/image'
import { ReactElement } from 'react'

interface ILoginPageLayout {
  onClick: () => void
}

export default function LoginPage() {
  return <LoginPageLayout onClick={() => []} />
}

const LoginPageLayout: React.FC<ILoginPageLayout> = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-[#eee]">
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
    </div>
  )
}
