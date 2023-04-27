import { lazy } from "react";
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./home'))
const Auth = lazy(() => import('./auth'))
const Settings = lazy(() => import('./settings'))

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/settings" element={<Settings/>}/>

    </Routes>
  )
}