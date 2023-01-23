import './index.css'

import App from './App';
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'

//this is a react context which will provide all child components with information related to routing

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
)
