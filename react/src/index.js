import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import VConsole from 'vconsole'
import App from './App'
import './assets/styles/global.scss'
import reportWebVitals from './reportWebVitals'

if (process.env.NODE_ENV !== 'production' || process.env.REACT_APP_ENV === 'testing') {
  new VConsole({ theme: 'dark' })
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
