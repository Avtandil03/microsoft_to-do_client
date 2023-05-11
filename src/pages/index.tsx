import { lazy } from "react";
import { Route, Routes } from 'react-router-dom'
import PrivatRoute from "./router/private-route";

const Home = lazy(() => import('./home'))
const Auth = lazy(() => import('./auth'))
const Settings = lazy(() => import('./settings'))

export const Routing = () => {
  return (
    <Routes>
      <Route element={<PrivatRoute/>}>
        <Route path="/" element={<Home/> }/>
        <Route path="/settings" element={<Settings/>}/>
      </Route>
      <Route path="/auth" element={<Auth/>}/>

    </Routes>
  )
}