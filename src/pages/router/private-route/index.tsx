import { Navigate, RouteProps, useNavigate, } from 'react-router-dom';
import { useAppSelector } from '../../../app/store/store';

export function PrivateRoute({ children }: RouteProps): JSX.Element {
  const navigate = useNavigate()
  const isAuth = !!useAppSelector((state) => state.user.isAuth)
  if(!isAuth) navigate('/auth')
  return (
    <>
      {isAuth
        ? children
        : <Navigate to="/auth"/>
      }
    </>
  );
}