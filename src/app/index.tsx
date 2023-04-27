import { withProviders } from "./providers"
import './index.scss'
import { Routing } from './../pages/index'


const App = () => {
  return (
    <>
      <Routing/>
    </>
  )
}

export default withProviders(App);