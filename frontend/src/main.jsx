import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <ToastContainer/>
    <App />
  </StrictMode>,
  </Provider>
)
