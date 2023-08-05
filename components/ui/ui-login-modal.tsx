import { createPortal } from 'react-dom'
import type { ReactElement } from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Draggable from 'react-draggable'

export function UiLoginModal({
  isOpen = false,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: ReactElement
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!isOpen) return null
  const modal = (
    <Draggable handle=".handle">
      <div className="absolute w-[450px] h-[520px] bg-black text-white m-auto top-0 left-0 right-0 bottom-0">
        <div className="flex justify-between items-center h-[32px] handle">
          <div className="text-xs ml-[10px]">Sign in</div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-[46px] hover:bg-red-600 h-full no-handle"
          >
            <Image
              width={10}
              height={10}
              src={'/login-modal-close.svg'}
              alt="close icon"
            />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </Draggable>
  )

  return mounted
    ? createPortal(modal, document.getElementById('modals') as HTMLElement)
    : null
}

UiLoginModal.SignWays = function UILoginModalSignWays({
  onContinue,
  preferWay,
  children,
}: {
  onContinue: () => void
  preferWay: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="pt-6">
      <h3 className="text-xl leading-6 pl-6">Let{`'`}s get you signed in</h3>
      <div className="leading-8 text-sm font-semibold mt-[15px]">
        <h5 className="pl-6">Use this way</h5>
        {preferWay}
        <h5 className="pl-6">Use different way to sign in</h5>
        {children}
      </div>
      <button
        onClick={onContinue}
        className="w-48 h-8 box-border bg-[#333] absolute hover:border-2 border-[#808080active:brightness-150 active:scale-[98%] right-6 bottom-6 text-sm"
      >
        Continue
      </button>
    </div>
  )
}

// UiLoginModal.LoginForm = function UILoginModalLoginForm({
//   onContinue,
//   preferWay,
//   children,
// }: {
//   onContinue: () => void
//   preferWay: React.ReactNode
//   children: React.ReactNode
// }) {

//   return (
//   )
// }
