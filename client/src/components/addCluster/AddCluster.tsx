import axios from 'axios';
import React, { useState } from 'react';

const AddCluster = () => {
  const [clusterURL, setClusterURL] = useState('');
  const [kubernetesPort, setKubernetesPort] = useState('');
  const [clusterName, setClusterName] = useState('');
  const [grafanaURL, setGrafanaURL] = useState('');
  const [thanosPort, setThanosPort] = useState('');

  const submitFormData = (e) => {
    e.preventDefault();

    const newUser = {
      clusterURL,
      kubernetesPort,
      clusterName,
      grafanaURL,
      thanosPort,
    };
    console.log(newUser);

    axios.post('http://localhost:3002/add-cluster', newUser);

    // reset states
    // setClusterURL('');
    // setKubernetesPort('');
    // setClusterName('');
    // setGrafanaURL('');
    // setThanosPort('');
  };
  const inputField =
    'border-b-2 pb-2 border-violet-300 w-full focus:outline-none focus:border-violet-600 focus:border-b-3';

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative w-1/2 py-3 sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-violet-300 to-violet-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <div className='max-w-md mx-auto'>
            <div>
              <h1 className='text-2xl border-violet-500 font-semibold'>
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
                    id='clusterURL'
                    className={inputField}
                    name='clusterURL'
                    autoComplete='off'
                    placeholder='Cluster URL'
                    onChange={(e) => setClusterURL(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='kubernetesPort'
                    className={inputField}
                    name='kubernetesPort'
                    autoComplete='off'
                    placeholder='Kubernetes Port'
                    onChange={(e) => setKubernetesPort(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='pw'
                    className={inputField}
                    name='pw'
                    autoComplete='off'
                    placeholder='Thanos (sidecar) Port'
                    onChange={(e) => setThanosPort(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='clusterName'
                    className={inputField}
                    name='clusterName'
                    autoComplete='off'
                    placeholder='Cluster Name'
                    onChange={(e) => setClusterName(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    id='grafanaURL'
                    className={inputField}
                    name='grafanaURL'
                    autoComplete='off'
                    placeholder='grafanaURL'
                    onChange={(e) => setGrafanaURL(e.target.value)}
                  />
                </div>
                <div className='relative'>
                  <input
                    type='submit'
                    className='bg-transparent px-8 py-3 mt-10 cursor-pointer rounded-md text-lg focus:scale-95 border-violet-300 border-2 text-violet-800 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-violet-500 duration-[400ms,700ms] transition-[color,box-shadow]'
                    value='Add Cluster'
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
