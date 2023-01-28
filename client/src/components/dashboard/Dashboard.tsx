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
// import { GrCluster } from 'react-icons/gr';
import Home from '../Home';
import { Link } from 'react-router-dom';
import ScalingMetrics from '../scalingMetrics/ScalingMetrics';
import Sidebar from '../sidebar/Sidebar';
import Settings from '../Settings/settings';
import { Outlet } from "react-router-dom";

// RiLogoutBoxLine

type Props = {};

const Dashboard = (props: Props) => {
  const [active, setActive] = useState(1);
  // clicking on the different options on the sidebar changes the 'active' state above

  const listElement = 'rounded-sm hover:scale-105';

  return (
    <div className='w-screen h-screen'>
      {/* CODE TO BE MOVED TO Sidebar.jsx STARTS HERE */}
      <div className='flex'>
        {/* <Sidebar /> WILL REPLACE 'CODE TO BE MOVED' ONCE REDUX IS IMPLEMENTED*/}
        <div className='flex'>
          <div className='flex flex-col p-3 bg-white shadow w-60'>
            <div className='space-y-3'>
              <div className='flex items-center pt-6'>
                <h2 className='text-xl pl-4 font-bold'>Dashboard</h2>
              </div>
              <div className='flex pt-6'>
                <ul className='pt-2 pb-4 space-y-3 text-sm'>
                  <li className={listElement} onClick={() => setActive(1)}>
                    <a
                      href='#scalingmetrics'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <RiBarChartLine size={24} />
                      <span>Scaling Metrics</span>
                    </a>
                  </li>
                  {/* make alerts render on the screen on click: path='/alerts' */}
                  <li className={listElement} onClick={() => setActive(2)}>
                    <a
                      href='#alerts'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <AiOutlineWarning size={24} />
                      <span>Alerts</span>
                    </a>
                  </li>
                  <li className={listElement} onClick={() => setActive(3)}>
                    <a
                      href='#clusterinfo'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <AiOutlineCluster size={24} />
                      <span>Cluster Info</span>
                    </a>
                  </li>
                  <li className={listElement} onClick={() => setActive(4)}>
                    <a
                      href='#kubeview'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <RiBubbleChartLine size={24} />
                      <span>KubeView</span>
                    </a>
                  </li>
                  <li
                    className={listElement}
                    onClick={() => setActive(5)}
                  >
                    <a
                      href='#settings'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <RiSettings3Line size={24} />
                      <span>Settings</span>
                    </a>
                  </li>
                  <li
                    className={listElement}
                  >
                    <Link
                      to='/home'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <RiLogoutBoxLine size={24} />
                      <div>
                        <span>Logout</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Outlet/>
        </div>
        {active === 1 && <ScalingMetrics />}
        {active === 2 && <Alerts />}
        {active === 3 && <ClusterInfo />}
        {/* {active === 4 && <KubeView />} */}
        {active === 5 && <Settings />}
      </div>
      {/* CODE TO BE MOVED TO Sidebar.jsx ENDS HERE */}
    </div>
    
  );
};

export default Dashboard;
