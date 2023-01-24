import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const NewUser = () => {
  const [clusterURL, setClusterURL] = useState('');
  const [kubernetesPort, setKubernetesPort] = useState('');
  const [clusterName, setClusterName] = useState('');
  const [grafanaURL, setGrafanaURL] = useState('');
  const [thanosPort, setThanosPort] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [username, setUsername] = useState('');

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  })


  const [activeTab, setActiveTab] = useState(1);

  const handleNextButton = () => {
    setActiveTab(activeTab + 1);
  };

  const submitFormData = (e?: any) => {
    e.preventDefault();

    // const newUser = {
    //   // firstName, 
    //   // lastName,
    //   // email,
    //   // username,
    //   // password,
    //   // clusterURL,
    //   // kubernetesPort,
    //   // clusterName,
    //   // grafanaURL,
    //   // thanosPort,
    // };
    console.log(formData);

    axios.post('http://localhost:3000/users/signup', formData);

    // reset states
    // setClusterURL('');
    // setKubernetesPort('');
    // setClusterName('');
    // setGrafanaURL('');
    // setThanosPort('');
  };
  const inputField =
    'border-b-2 rounded-lg mb-4 h-11 px-2 border-sapphire-blue w-full focus:outline-none focus:border-fuzzy-wuzzy focus:border-b-3';
  const active =
    'text-primary-color font-semibold border-b-2 border-primary-color pt-1 text-lg';
  
  const nonActive = 'text-lg text-off-white hover:text-purple hover:border-b-2';

  const button = 
    'px-8 py-3 mt-6 mr-2 cursor-pointer rounded-md text-lg focus:scale-95 border-off-white border-2 text-off-white hover:text-purple hover:shadow-[inset_13rem_0_0_0] hover:shadow-primary-color/80 hover:border-purple duration-[400ms,700ms] transition-[color,box-shadow]';

  return (
    // This moves the boxes down and away from the navbar
    <div className='flex flex-col justify-center sm:py-40'>
      {/* This one adjusts the boxes sizes to be small */}
      <div className='relative w-1/2 py-3 sm:max-w-xl sm:mx-auto'>
        {/* This div is specifically for the back box */}
        <div className='absolute inset-0 bg-gradient-to-r from-sapphire-blue/90 to-light-blue/90 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        {/* This styling is for the front box and allows you to see the inputs and text */}
        <div className='relative px-4 py-10 bg-gradient-to-r from-prussian-blue/90 to-teal-blue/90 shadow-lg sm:rounded-3xl sm:p-20'>
          {/* This div makes the boxes square and maxes them out */}
          <div className='max-w-md mx-auto mb-[-50px]'>
            {/* This is for the sign up and add cluster info tabs */}
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
              <form
                onSubmit={submitFormData}
                className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'
              >
                {activeTab === 1 && (
                  <div>
                    {/* First Name */}
                    <div className='relative'>
                      <input
                        type='firstName'
                        id='firstName'
                        className={inputField}
                        name='firstName'
                        autoComplete='off'
                        placeholder='First Name'
                        onChange={(e) => setFormData({...formData, firstname: e.target.value})}
                      />
                    </div>
                    {/* Last Name */}
                    <div className='relative'>
                      <input
                        type='lastName'
                        id='lastName'
                        className={inputField}
                        name='lastName'
                        autoComplete='off'
                        placeholder='Last Name'
                        onChange={(e) => setFormData({...formData, lastname: e.target.value})}
                      />
                    </div>
                    {/* Email */}
                    <div className='relative'>
                      <input
                        type='email'
                        id='email'
                        className={inputField}
                        name='email'
                        autoComplete='off'
                        placeholder='Email'
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                      {/* username */}
                      <div className='relative'>
                      <input
                        type='username'
                        id='username'
                        className={inputField}
                        name='username'
                        autoComplete='off'
                        placeholder='Username'
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
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
                        placeholder='Password'
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                      />
                    </div>

                    <div className='relative'>
                      {/* Added 2nd button here */}
                    <button 
                      type='submit'
                      className={button}
                    >
                      Sign Up!
                    </button>
                        
                      {/* <button
                        onClick={() => setActiveTab(2)}
                        className={button}
                      >
                        Add your cluster
                      </button> */}
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
                        className={button}
                        onClick={//insert if (auth verified) logic here with functional block bearing .replace
                          //url needs to be generic 
                          () => submitFormData
                          // () => window.location.replace('http://127.0.0.1:4000/dashboard')
                        }
                        value='Sign me up!'
                      />
                    </div>
                  </div>
                )}
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
