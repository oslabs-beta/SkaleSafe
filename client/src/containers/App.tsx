import { Route, Routes } from 'react-router-dom';

import AddCluster from '../components/AddCluster/AddCluster';
import Dashboard from '../components/Dashboard/Dashboard';
import { Error } from '../components/Error';
import HomeContainer from '../containers/HomeContainer';

import Navbar from '../components/navbar/Navbar';
import Profile from '../components/profile/Profile'
import ScalingMetrics from '../components/ScalingMetrics/ScalingMetrics'
import SignIn from '../components/Signin/SignIn';
import Alerts from '../components/alerts/Alerts';
import ContactUs from '../components/contactUs/ContactUs'
import MeetTeam from '../components/MeetTeam/MeetTeam'

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
          <Route path='profile' element={<Profile />}/> 
          {/* WORKS IN DASHBOARD/PROFILE, doesnt display dashboard */}
            <Route path='addcluster' element={<AddCluster />}/>
          {/* DELETE ADD CLUSTER ROUTE ONCE MADE INTO A MODAL */}
        </Route>

        {/* switch paths for scalingmetrics and alerts to dashnoard href made in dashboard file */}
        <Route path='/signin' element={<SignIn/>}/>
        
        <Route path='*' element={<Error/>} />

      </Routes>
      </div>
    </div>
  );
};

export default App;
