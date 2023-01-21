import React, { useState } from 'react'

import Sidebar from '../sidebar'

type Props = {}

const Dashboard = (props: Props) => {

const [active, setActive] = useState(1)


  return (
      <div className='flex'>
          <Sidebar />
          {/* {active === 1 && (
              <ClusterInfo />
          )}
          {active === 2 && (
              <Alerts />
          )}
          {active === 3 && (
              <Profile />
          )} */}
    </div>
  )
}

export default Dashboard