import { Provider } from 'react-redux'
import Body from './Components/Body'
import appstore from './utils/appstore'



const App = () => {
  return (
    <Provider store={appstore}>
      <Body/>
    </Provider>
  )
}

export default App