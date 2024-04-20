import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Api from './Api.jsx'
import Geet from './Parent.jsx'
import Mess from "./Mess.jsx"
import Single from './Single.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <br/>
  <br/>
    {/* <Geet/> */}
    {/* <Mess /> */}
    <Api />
    <br/>
    <Single/>
  </React.StrictMode>,
)
