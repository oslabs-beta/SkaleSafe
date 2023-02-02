import {
  AiOutlineCluster,
  AiOutlineControl,
  AiOutlineWarning,
} from 'react-icons/ai';
import React, { useState } from 'react';
import {
  RiBarChartLine,
  RiBubbleChartLine,
  RiEqualizerLine,
  RiLogoutBoxLine,
  RiProfileLine,
  RiSettings3Line,
} from 'react-icons/ri';

// import Sidebar from '../sidebar/Sidebar.jsx'
import Alerts from '../alerts/Alerts';
import ClusterInfo from '../clusterInfo/ClusterInfo';
import Home from '../Home';
import KubeView from '../kubeview/KubeView';
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import LightOrDark from '../modeSwitch/ModeSwitch';
import ScalingMetrics from '../scalingMetrics/ScalingMetrics';
import Settings from '../Settings/settings';
import Sidebar from '../sidebar/Sidebar';
import { setIsLoggedIn } from '../../../redux/slices/userSlice';
import { useAppDispatch } from '../../../redux/hooks/hooks';



type Props = {};

const Dashboard = (props: Props) => {
  const [active, setActive] = useState(1);
  // clicking on the different options on the sidebar changes the 'active' state above

  const listElement = 'rounded-sm hover:scale-105';
  const dispatch = useAppDispatch();
  const loggedOut = (event: any) => {
    event.preventDefault();
    dispatch(setIsLoggedIn(false));
  }


  return (
    <div className='w-screen h-screen'>
      {/* CODE TO BE MOVED TO Sidebar.jsx STARTS HERE */}
      <div className='flex'>
        {/* <Sidebar /> WILL REPLACE 'CODE TO BE MOVED' ONCE REDUX IS IMPLEMENTED*/}
        <div className='flex'>
          <div id ='dashboardbg' className='flex flex-col p-3 bg-honeydew shadow w-60'>
            <div className='space-y-3'>
              <div className='flex items-center pt-6'>
                <h2 id='dbText' className='text-xl text-prussian-blue pl-4 font-bold'>Dashboard</h2>
              </div>
              <div className='flex pt-6'>
                <ul className='pt-2 pb-4 space-y-3 text-sm'>
                  <li className={listElement} onClick={() => setActive(1)}>
                    <a
                      href='#scalingmetrics'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <RiBarChartLine size={24} />
                      <span id='scalingoption' className='text-prussian-blue'>Scaling Metrics</span>
                    </a>
                  </li>
                  {/* make alerts render on the screen on click: path='/alerts' */}
                  <li className={listElement} onClick={() => setActive(2)}>
                    <a
                      href='#alerts'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <AiOutlineWarning size={24} />
                      <span id='alertsoption' className='text-prussian-blue'>Alerts</span>
                    </a>
                  </li>
                  <li className={listElement} onClick={() => setActive(3)}>
                    <a
                      href='#clusterinfo'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <AiOutlineCluster size={24} />
                      <span id='clusteroption' className='text-prussian-blue'>Cluster Info</span>
                    </a>
                  </li>
                  <li className={listElement} onClick={() => setActive(4)}>
                    <a
                      href='#kubeview'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <RiBubbleChartLine size={24} />
                      <span id='kubeoption' className='text-prussian-blue'>KubeView</span>
                    </a>
                  </li>
                  <li className={listElement} onClick={() => setActive(5)}>
                    <a
                      href='#settings'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <RiSettings3Line size={24} />
                      <span id='settingsoption' className='text-prussian-blue'>Settings</span>
                    </a>
                  </li>
                  <li
                    className={listElement}
                    onClick={loggedOut}
                  >
                    <Link
                      to='/home'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <RiLogoutBoxLine size={24} />
                      <div>
                        <span id='logoutoption' className='text-prussian-blue'>Logout</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
        {active === 1 && <ScalingMetrics />}
        {active === 2 && <Alerts />}
        {active === 3 && <ClusterInfo />}
        {active === 4 && <KubeView />}
        {active === 5 && <Settings />}
      </div>
      {/* CODE TO BE MOVED TO Sidebar.jsx ENDS HERE */}
    </div>
  );
};

export default Dashboard;
