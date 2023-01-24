import { Route, Routes } from 'react-router-dom';

import AddCluster from './components/addCluster/AddCluster';
import Alerts from './components/alerts/Alerts';
import Dashboard from './components/dashboard/Dashboard';
// import AddCluster from './components/addCluster/AddCluster';
import { Error } from './components/Error';
import { Home } from './components/Home';
import Navbar from './components/navbar/Navbar';
import NewUser from './components/newUser/NewUser';
import Profile from './components/profile/Profile'
import React from 'react';
import SignIn  from './components/SignIn';

//Links are setup to allow only <routes> to change; the whole app is not re-rendered
//Nested routes
//parent child routes; element only given to children as appropriate
//if the parent route needs to be rendered, use index for the route instead of path
//sharing a layout is possible amongst children via passing an element that carries the layout into the parent

// add on click to sign/add your cluster to redirect to dashboard

const App = () => {
  return (
    <div className=''>
       <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/alerts' element={<Alerts />} />
        <Route path='/user/signup' element={<NewUser />} />
        <Route path='/user/signin' element={<SignIn />} />
        <Route path='/dashboard/addcluster' element={<AddCluster />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
