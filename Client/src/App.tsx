import React  from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import {Home} from './ReactRoutertest/Home.js';
import {Signup} from './ReactRoutertest/Signup.js';
import {Login} from './ReactRoutertest/Login.js';
import {Error} from './ReactRoutertest/Error.js';

//Links are setup to allow only <routes> to change; the whole app is not re-rendered
//Nested routes
  //parent to child relationship within routes; element only given to children as appropriate
  //if the parent route needs to be rendered, create a new child route using index for the route instead of path
  //sharing a layout is possible amongst children via passing an element that carries the layout into the parent
function App() {
  return (
  <>
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
    </ul>
  </nav>

  <Routes>
    <Route path ='/' element={<Home/>} />
    <Route path='/signup' element= {<Signup/>}/>
    <Route path='/Login' element= {<Login/>}/>
    <Route path='*' element= {<Error/>}/>
  </Routes>
  </>
  )
  }

export default App
