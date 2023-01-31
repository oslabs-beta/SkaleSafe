import { Route, Routes } from 'react-router-dom';

import AddCluster from '../components/addCluster/AddCluster';
import Alerts from '../components/alerts/Alerts';
import ContactUs from '../components/contactUs/ContactUs'
import Dashboard from '../components/dashboard/Dashboard';
import { Error } from '../components/Error';
import HomeContainer from '../containers/HomeContainer';
import Navbar from '../components/navbar/Navbar';
import ScalingMetrics from '../components/scalingMetrics/ScalingMetrics'
import SignIn  from '../components/SignIn';
import Signup from '../components/signup/Signup';
import Profile from '../components/profile/Profile'

// import { SignupModal } from './components/signupModal/SignupModal';

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

      <div>
      <Routes>
      <Route path='/' element={<HomeContainer />} />
        <Route path='/home' element={<HomeContainer />} />
      
        <Route path='/dashboard' element= {<Dashboard/>}>
          {/* <Route index />  */}
          {/* element= {<Dashboard/>} RENDERS THE PROFILE & ADDCLUSTER APPROPRIATELY BUT DOESN NOT DISPLAY DASHBOARD */}
            <Route path='profile' element={<Profile/>}/> 
          {/* WORKS IN DASHBOARD/PROFILE, doesnt display dashboard */}
           <Route path='addcluster' element={<AddCluster />}/>
          {/* DELETE ADD CLUSTER ROUTE ONCE MADE INTO A MODAL */}
        </Route>
       
        {/* DELETE THESE ROUTES ONCE MADE INTO A MODAL */}
        <Route path='/users/signin' element={<SignIn />} />
        <Route path='/users/signup' element={<Signup />} />

        {/* switch paths for scalingmetrics and alerts to dashnoard href made in dashboard file */}
        
        <Route path='*' element={<Error />} />

{/* deprecated routes - DELETE */}
        {/* <Route path='/scalingMetrics' element={<ScalingMetrics />} /> */}
        {/* <Route path='/alerts' element={<Alerts />} /> */}
       
      </Routes>
      </div>
    </div>
  );
};

export default App;
