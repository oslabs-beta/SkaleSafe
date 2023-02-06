import {
  AiOutlineCluster,
  AiOutlineControl,
  AiOutlinePlus,
  AiOutlineWarning,
} from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import {
  RiBarChartLine,
  RiBubbleChartLine,
  RiLogoutBoxLine,
  RiSettings3Line,
} from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks/Hooks';
import { useEffect, useState } from 'react';


import AlertsMetrics from '../Metrics/AlertsMetrics/AlertsMetrics';
import ClusterMetrics from '../Metrics/ClusterMetrics/ClusterMetrics';
import KubeView from '../Kubeview/KubeView';
import LightOrDark from '../ModeSwitch/ModeSwitch';
import Profile from '../Profile/Profile';
import ScalingMetrics from '../Metrics/ScalingMetrics/ScalingMetrics';
import { setIsLoggedIn } from '../../../redux/Slices/UserSlice';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Dashboard = (props: Props) => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const [active, setActive] = useState(1);
  // clicking on the different options on the sidebar changes the 'active' state above
  const listElement = 'rounded-sm hover:scale-105';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loggedOut = (event: any) => {
    event.preventDefault();
    dispatch(setIsLoggedIn(false));
  };

  useEffect(() => {
    if (isLoggedIn) navigate('/dashboard');
    else navigate('/');
  },[navigate, isLoggedIn])

    return (
      <div className='w-screen h-screen'>
        <div className='flex'>
          <div className='flex'>
            <div
              id='dashboardbg'
              className='flex flex-col p-3 bg-honeydew shadow w-60 h-full'
            >
              <div className='space-y-3'>
                <div className='flex items-center pt-6'>
                  <h2
                    id='dbText'
                    className='text-xl text-prussian-blue pl-4 font-bold'
                  >
                    Dashboard
                  </h2>
                </div>
                <div className='flex'>
                  <ul className='pt-2 pb-4 space-y-3 text-sm'>
                    <li className={listElement} onClick={() => setActive(1)}>
                      <a
                        href='#scalingmetrics'
                        className='flex items-center p-2 space-x-3 rounded-md'
                      >
                        <RiBarChartLine size={24} />
                        <span id='scalingoption' className='text-prussian-blue'>
                          Scaling Metrics
                        </span>
                      </a>
                    </li>
                    {/* make alerts render on the screen on click: path='/alerts' */}
                    <li className={listElement} onClick={() => setActive(2)}>
                      <a
                        href='#alerts'
                        className='flex items-center p-2 space-x-3 rounded-md'
                      >
                        <AiOutlineWarning size={24} />
                        <span id='alertsoption' className='text-prussian-blue'>
                          Alerts
                        </span>
                      </a>
                    </li>
                    <li className={listElement} onClick={() => setActive(3)}>
                      <a
                        href='#clusterinfo'
                        className='flex items-center p-2 space-x-3 rounded-md'
                      >
                        <AiOutlineCluster size={24} />
                        <span id='clusteroption' className='text-prussian-blue'>
                          Cluster Health
                        </span>
                      </a>
                    </li>
                    <li className={listElement} onClick={() => setActive(4)}>
                      <a
                        href='#kubeview'
                        className='flex items-center p-2 space-x-3 rounded-md'
                      >
                        <RiBubbleChartLine size={24} />
                        <span id='kubeoption' className='text-prussian-blue'>
                          KubeView
                        </span>
                      </a>
                    </li>
                    <li className={listElement} onClick={() => setActive(5)}>
                      <a
                        href='#profile'
                        className='flex items-center p-2 space-x-3 rounded-md'
                      >
                        <RiSettings3Line size={24} />
                        <span
                          id='settingsoption'
                          className='text-prussian-blue'
                        >
                          <Profile />
                        </span>
                      </a>
                    </li>

                    <li className={listElement} onClick={loggedOut}>
                      <Link
                        to='/home'
                        className='flex items-center p-2 space-x-3 rounded-md mb-24'
                      >
                        <RiLogoutBoxLine size={24} />
                        <div>
                          <span
                            id='logoutoption'
                            className='text-prussian-blue'
                          >
                            Logout
                          </span>
                        </div>
                      </Link>
                    </li>
                    <div className='flex py-4 px-6 rounded-full justify-start bg-primary-color shadow-md hover:shadow-lg cursor-pointer hover:scale-105 text-white'>
                      <AiOutlinePlus className='justify-start mr-2 text-lg font-semibold hover:scale-105' />
                      <p className=''>Create a Cluster</p>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
          {active === 1 && <ScalingMetrics />}
          {active === 2 && <AlertsMetrics />}
          {active === 3 && <ClusterMetrics />}
          {active === 4 && <KubeView />}
          {active === 5 && <Profile />}
        </div>
        {/* CODE FORMERLY KNOWN AS Sidebar.jsx ENDS HERE */}
      </div>
    );
};

export default Dashboard;
