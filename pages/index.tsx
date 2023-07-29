import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'

interface ILayout {
  children: ReactElement
}
interface INestedLayout {
  children: ReactElement
}

const HomePage: NextPageWithLayout = () => {
  return (
    <div className='h-full w-full '>
      <Link href={'/login'} className='border'> to login</Link>
      <Link href={'/settings'} className='border'> to settings</Link>
    </div>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
export default HomePage


const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='w-40 bg-red-500 h-40'></div>
      {children}
    </div>
  )
}

const NestedLayout: React.FC<INestedLayout> = ({ children }) => {
  return (
    children
  )
}
