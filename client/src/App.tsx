import { Route, Routes } from 'react-router-dom';
import React from 'react';

// import AddCluster from './components/addCluster/AddCluster';
import { Error } from './components/Error';
import { Home } from './components/Home';
import SignIn  from './components/SignIn';
import Navbar from './components/navbar/Navbar';
import AddCluster from './components/addCluster/AddCluster';
import NewUser from './components/newUser/NewUser';
import Alerts from './components/alerts/Alerts';

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
        <Route path='/signup' element={<NewUser />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/addcluster' element={<AddCluster />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
