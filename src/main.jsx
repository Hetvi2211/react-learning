import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './counter.jsx'
import Sumdemo from './Sumdemo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Eventdemo/> */}
    {/* <Counter/> */}
    {/* <Sumdemo/> */}
  </StrictMode>,
)
