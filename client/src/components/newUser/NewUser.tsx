import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const NewUser = () => {
  const [clusterURL, setClusterURL] = useState('');
  const [kubernetesPort, setKubernetesPort] = useState('');
  const [clusterName, setClusterName] = useState('');
  const [grafanaURL, setGrafanaURL] = useState('');
  const [thanosPort, setThanosPort] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [activeTab, setActiveTab] = useState(1);

  const handleNextButton = () => {
    setActiveTab(activeTab + 1);
  };

  const submitFormData = (e: any) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
      clusterURL,
      kubernetesPort,
      clusterName,
      grafanaURL,
      thanosPort,
    };
    console.log(newUser);

    axios.post('http://localhost:3000/users/signup', newUser);

    // reset states
    // setClusterURL('');
    // setKubernetesPort('');
    // setClusterName('');
    // setGrafanaURL('');
    // setThanosPort('');
  };
  const inputField =
    'border-b-2 mb-4 pb-2 mb-2 border-violet-300 w-full focus:outline-none focus:border-violet-600 focus:border-b-3';
  const active =
    'text-violet-600 font-semibold border-b-2 border-violet-600 pt-1 text-lg';
  const nonActive = 'text-lg text-gray-600';

  return (
    <div className='flex flex-col justify-center sm:py-12'>
      <div className='relative w-1/2 py-3 sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-violet-300 to-violet-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <div className='max-w-md mx-auto mb-[-50px]'>
            <div className='flex place-content-center gap-x-20 mt-[-30px] mb-10'>
              <button
                className={activeTab === 1 ? active : nonActive}
                onClick={() => setActiveTab(1)}
              >
                Sign Up
              </button>
              <button
                className={activeTab === 2 ? active : nonActive}
                onClick={() => setActiveTab(2)}
              >
                Add Cluster Info
              </button>
            </div>
            <div className='divide-y divide-gray-200'>
              <form
                onSubmit={submitFormData}
                className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'
              >
                {activeTab === 1 && (
                  <div>
                    {' '}
                    {/* Email */}
                    <div className='relative'>
                      <input
                        type='email'
                        id='email'
                        className={inputField}
                        name='email'
                        autoComplete='off'
                        placeholder='Your Email'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {/* Password */}
                    <div className='relative'>
                      <input
                        type='text'
                        id='password'
                        className={inputField}
                        name='password'
                        autoComplete='off'
                        placeholder='Your Password'
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className='relative'>
                      <button
                        onClick={() => setActiveTab(2)}
                        className='bg-transparent px-8 py-3 mt-6 cursor-pointer rounded-md text-lg focus:scale-95 border-violet-300 border-2 text-violet-800 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-violet-500 duration-[400ms,700ms] transition-[color,box-shadow]'
                      >
                        Next step...
                      </button>
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div>
                    {/* Add Cluster */}
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

                    {/* Kubernetes Port */}
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

                    {/* Thanos Port */}
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

                    {/* Cluster Name */}
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

                    {/* Grafana URL */}
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
                        className='bg-transparent px-8 py-3 mt-6 cursor-pointer rounded-md text-lg focus:scale-95 border-violet-300 border-2 text-violet-800 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-violet-500 duration-[400ms,700ms] transition-[color,box-shadow]'
                        value='Submit'
                      />
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
