import { Route, Routes } from 'react-router-dom';

// import AddCluster from './components/addCluster/AddCluster';
import { Error } from './ReactRoutertest/Error';
import { Home } from './ReactRoutertest/Home';
import { Login } from './ReactRoutertest/Login';
import Navbar from './components/navbar/Navbar';
// import NewCluster from './components/addCluster/NewCluster';
import React from 'react';
import { Signup } from './ReactRoutertest/Signup';
import AddCluster from './components/addCluster/AddCluster';
import NewUser from './components/newUser/NewUser';

//Links are setup to allow only <routes> to change; the whole app is not re-rendered
//Nested routes
//parent child routes; element only given to children as appropriate
//if the parent route needs to be rendered, use index for the route instead of path
//sharing a layout is possible amongst children via passing an element that carries the layout into the parent
const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/cluster' element={<AddCluster />} />
        <Route path='/new' element={<NewUser />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
