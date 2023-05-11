import { Navigate, Outlet } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { useCheckAuthQuery } from '../../../features/api/apiSlice';
import { setIsAuth, setUser } from '../../../features/user/userSlice';
import { useEffect } from 'react';

const PrivatRoute = () => {

  const isAuth = useAppSelector((state) => state.user.isAuth)
  const dispatch = useAppDispatch()
  const { data, isSuccess, isLoading } = useCheckAuthQuery()

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('token', data.accessToken)
      dispatch(setIsAuth(true))
      dispatch(setUser(data.user))
    }
  }, [isSuccess, data])

  return (
    isAuth ? <Outlet/> : <Navigate to='/auth'/>
  )
  
}

export default PrivatRoute;