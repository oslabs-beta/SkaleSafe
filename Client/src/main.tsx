import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
  //this is a react context which will provide all child components with information related to routing

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
