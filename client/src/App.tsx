import React from 'react';
import AddCluster from './components/addCluster/AddCluster';
import NewCluster from './components/addCluster/NewCluster';
import { Link, Route, Routes } from 'react-router-dom'

import {Error} from './ReactRoutertest/Error.js';
import {Home} from './ReactRoutertest/Home.js';
import {Login} from './ReactRoutertest/Login.js';
import React  from 'react'
import {Signup} from './ReactRoutertest/Signup.js';

//Links are setup to allow only <routes> to change; the whole app is not re-rendered
//Nested routes
  //parent child routes; element only given to children as appropriate
  //if the parent route needs to be rendered, use index for the route instead of path
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
  
  <div className=''>
      <h1 className='text-3xl font-bold underline'>This is my test heading</h1>
      {/* <AddCluster /> */}
  </div>
  </>
  )
  }

export default App
