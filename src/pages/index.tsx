import { lazy } from "react";
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from "./router/private-route";
import { PublicRoute } from "./router/public-route";

const Home = lazy(() => import('./home'))
const Auth = lazy(() => import('./auth'))
const Settings = lazy(() => import('./settings'))

export const Routing = () => {
  
  return (
    <Routes>
      <Route
        path="/"
        element={ <PrivateRoute> <Home /> </PrivateRoute> }
      />
      <Route
        path="/settings"
        element={ <PrivateRoute><Settings /></PrivateRoute> }
      />
      <Route
        path="/auth"
        element={<PublicRoute><Auth /></PublicRoute>}
      />

    </Routes>
  )
}