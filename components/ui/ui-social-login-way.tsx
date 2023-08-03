import clsx from 'clsx'
import Image from 'next/image'

export function SocialLoginWay({
  onClick,
  areChoosen,
  logoSrc,
  title,
  subtitle,
  signWay,
}: {
  onClick: (signWay: string) => void
  areChoosen?: boolean
  logoSrc: string
  title: string
  subtitle: string
  signWay: string
}) {
  return (
    <div
      className={clsx(
        'cursor-pointer select-none',
        areChoosen
          ? 'bg-[#004881] hover:brightness-150'
          : 'hover:bg-[#323232] hover:brightness-110'
      )}
      onClick={() => onClick(signWay)}
    >
      <div className="active:scale-[98%] flex pl-6 items-center h-16">
        <Image width={32} height={32} src={logoSrc} alt="logo.svg" />
        <div className="text-[13px] leading-[18px] font-semibold ml-3">
          <p>{title}</p>
          <p className="text-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
