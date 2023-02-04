import { useState } from 'react';

import axios from 'axios';

const AddCluster = () => {
  const [clusterIP, setClusterIP] = useState('');
  const [grafanaPort, setGrafanaPort] = useState('');
  const [grafanaUsername, setGrafanaUsername] = useState('');
  const [grafanaPassword, setGrafanaPassword] = useState('');
  const [kubeviewPort, setKubeviewPort] = useState('');

  const username = localStorage.getItem('username');

  const submitFormData = (e: any) => {
    e.preventDefault();

    const addCluster = {
      clusterIP,
      grafanaPort,
      grafanaUsername,
      grafanaPassword,
      kubeviewPort,
      username,
    };
    console.log(addCluster);

    // axios.post('http://localhost:3000/add-cluster', addCluster);
    // axios.post('http://localhost:3000/add-dashboard', addCluster);
    // axios.post('http://localhost:3000/add-alerts', addCluster);

    axios
      .all([
        axios.post('http://localhost:3000/add-cluster', addCluster),
        axios.post('http://localhost:3000/graf/add-dashboard', addCluster),
        axios.post('http://localhost:3000/graf/add-alerts', addCluster),
      ])
      .then(
        axios.spread((clusterResolved, dashboardResolved, alertsResolved) => {
          // All requests are now complete
          console.log(clusterResolved.data);
          console.log(dashboardResolved.data);
          console.log(alertsResolved.data);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  };
  const inputField =
    'border-b-2 pb-2 border-violet-300 w-full focus:outline-none focus:border-violet-600 focus:border-b-3';

  return (
    <div className='w-screen min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative w-1/2 py-3 mt-14 sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-purple to-purple shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <div className='max-w-md mx-auto'>
            <div>
              <h1 className='text-2xl border-violet-500 mb-4 font-semibold'>
                Add Your Cluster
              </h1>
            </div>
            <div className='divide-y divide-gray-200'>
              <form
                onSubmit={submitFormData}
                // action="{{ url('/') }}"
                method='GET'
                className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'
              >
                <div className='relative'>
                  <input
                    type='text'
                    id='grafanaPort'
                    className={inputField}
                    name='grafanaPort'
                    autoComplete='off'
                    placeholder='Grafana Port'
                    onChange={(e) => setGrafanaPort(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='clusterIP'
                    className={inputField}
                    name='clusterIP'
                    autoComplete='off'
                    placeholder='Cluster IP Address'
                    onChange={(e) => setClusterIP(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='grafanaUsername'
                    className={inputField}
                    name='grafanaUsername'
                    autoComplete='off'
                    placeholder='Grafana Username'
                    onChange={(e) => setGrafanaUsername(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='grafanaPassword'
                    className={inputField}
                    name='grafanaPassword'
                    autoComplete='off'
                    placeholder='Grafana Password'
                    onChange={(e) => setGrafanaPassword(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='kubeviewPort'
                    className={inputField}
                    name='kubeviewPort'
                    autoComplete='off'
                    placeholder='KubeView Port'
                    onChange={(e) => setKubeviewPort(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='submit'
                    className='bg-transparent px-8 py-3 mt-6 cursor-pointer rounded-md text-lg focus:scale-95 border-violet-300 border-2 text-violet-800 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-purple duration-[400ms,700ms] transition-[color,box-shadow]'
                    value='Add Cluster'
                    onClick={
                      //insert if (auth verified) logic here with functional block bearing .replace
                      //url needs to be generic
                      () =>
                        window.location.replace(
                          'http://127.0.0.1:4000/dashboard'
                        )
                    }
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCluster;
