import React, { useState } from 'react'

import Sidebar from '../sidebar/Sidebar.jsx'
import Alerts from '../alerts/Alerts.tsx'

type Props = {}

const Dashboard = (props: Props) => {

const [active, setActive] = useState(2)
// clicking on the different options on the sidebar should change 
// the 'active' state above

  return (
      <div className='flex'>
          <Sidebar />
          {/* {active === 1 && (
              <ClusterInfo />
          )} */}
          {active === 2 && (
              <Alerts />
          )}
          {/* {active === 3 && (
              <Profile />
          )} */}
    </div>
  )
}

export default Dashboard