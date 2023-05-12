import { withProviders } from "./providers"
import './index.scss'
import { Routing } from './../pages/index'
import { useEffect } from "react"
import { useLazyCheckAuthQuery } from "../features/api/apiSlice"
import { useDispatch } from "react-redux"
import { setIsAuth } from "../features/user/userSlice"

const App = () => {

  const [checkAuth] = useLazyCheckAuthQuery()
  const dispatch = useDispatch()
  
  const checkIsAuth = async () => {
    await checkAuth().unwrap().then((fulfilled) => {
      localStorage.setItem('token', fulfilled.accessToken)
      dispatch(setIsAuth(true))
      console.log('check');
    }).catch((e)=> {
      console.log(e);
    })
  }

  useEffect(() => {
    checkIsAuth()
  },[])
  
  return (
    <>
      <Routing/>
    </>
  )
}

export default withProviders(App);