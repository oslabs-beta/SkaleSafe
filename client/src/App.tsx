import { Route, Routes } from 'react-router-dom';

import AddCluster from './components/addCluster/AddCluster';
import Alerts from './components/alerts/Alerts';
import ContactUs from './components/contactUs/ContactUs'
import Dashboard from './components/dashboard/Dashboard';
import { Error } from './components/Error';
import HomeContainer from './containers/HomeContainer';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile'
import SignIn  from './components/SignIn';
import Signup from './components/signup/Signup';

//Links are setup to allow only <routes> to change; the whole app is not re-rendered
//Nested routes
//parent child routes; element only given to children as appropriate
//if the parent route needs to be rendered, use index for the route instead of path
//sharing a layout is possible amongst children via passing an element that carries the layout into the parent

// add on click to sign/add your cluster to redirect to dashboard

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/dashboard'>
          <Route index element = {<Dashboard />}></Route>
          <Route path='/dashboard/addcluster' element={<AddCluster />} />
          <Route path='/dashboard/contactus' element={<ContactUs />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='/alerts' element={<Alerts />} />
        <Route path='/users/signup' element={<Signup />} />
        <Route path='/users/signin' element={<SignIn />} />
        
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
