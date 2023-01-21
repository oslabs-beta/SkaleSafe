import React, { useState } from 'react'
import { AiOutlineWarning, AiOutlineControl, AiOutlineCluster } from 'react-icons/ai'
import { RiLogoutBoxLine, RiProfileLine, RiSettings3Line } from 'react-icons/ri'
import { GrCluster } from 'react-icons/gr'

// RiLogoutBoxLine


// import Sidebar from '../sidebar/Sidebar.jsx'
import Alerts from '../alerts/Alerts.tsx'
import ClusterInfo from '../clusterInfo/ClusterInfo'
import Profile from '../profile/Profile'

type Props = {}


const Dashboard = (props: Props) => {

const [active, setActive] = useState(1);
// clicking on the different options on the sidebar changes the 'active' state above

  return (
    <div>
    {/* CODE TO BE MOVED TO Sidebar.jsx STARTS HERE */}
      <div className='flex'>
          {/* <Sidebar /> WILL REPLACE 'CODE TO BE MOVED' ONCE REDUX IS IMPLEMENTED*/}
          <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm" onClick={() => setActive(1)}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <RiProfileLine size={24}/>
                                    <span>Profile</span>
                                </a>
                            </li>
                            {/* make alerts render on the screen on click: path='/alerts' */}
                            <li className="rounded-sm" onClick={() => setActive(2)}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <AiOutlineWarning size={24}/>
                                    <span>Alerts</span>
                                </a>
                            </li>
                            <li className="rounded-sm" onClick={() => setActive(3)}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <AiOutlineCluster size={24}/>
                                    <span>Cluster Info</span>
                                </a>
                            </li>
                            <li className="rounded-sm" onClick={() => console.log('Settings clicked!')}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <RiSettings3Line size={24}/>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li className="rounded-sm" onClick={() => console.log('Logout clicked!')}>
                                <a
                                    href="/signin"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <RiLogoutBoxLine size={24}/>
                                    <div>
                                        <span>Logout</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
          {active === 1 && (
              <Profile />
              )}
          {active === 2 && (
              <Alerts />
              )}
          {active === 3 && (
              <ClusterInfo />
          )}
    </div>
    {/* CODE TO BE MOVED TO Sidebar.jsx ENDS HERE */}
    </div>
  )
}

export default Dashboard