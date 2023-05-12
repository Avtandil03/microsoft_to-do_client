import { Navigate, RouteProps, useNavigate, } from 'react-router-dom';
import { useAppSelector } from '../../../app/store/store';

export function PublicRoute({ children }: RouteProps): JSX.Element {
  const navigate = useNavigate()
  const isAuth = !!useAppSelector((state) => state.user.isAuth)
  if(isAuth) navigate('/')
  return (
    <>
      {!isAuth
        ? children
        : <Navigate to="/"/>
      }
    </>
  );
}