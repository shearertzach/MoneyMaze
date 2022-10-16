import "../styles/globals.css";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="w-screen h-screen flex items-center justify-center">
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default MyApp;
