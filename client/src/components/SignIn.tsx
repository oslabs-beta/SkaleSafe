import { useEffect, useState } from 'react';

import React from 'react'
import SignInData from '../interfaces/signin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [clusterURL, setClusterURL] = useState('');
  const [kubernetesPort, setKubernetesPort] = useState('');
  const [clusterName, setClusterName] = useState('');
  const [grafanaURL, setGrafanaURL] = useState('');
  const [thanosPort, setThanosPort] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false)
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [formData, setFormData] = useState<SignInData>({
    username: '',
    password: ''
  })

  useEffect(() => {
    if(isSignedIn) {
      navigate('/dashboard')
    } else {
      console.log('Error logging in')
    }
  }, [isSignedIn, navigate])


  const handleChange = (event: any) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  }

  const submitFormData = (e: any) => {
    e.preventDefault();

    // const newUser = {
    //   email,
    //   password,
    //   clusterURL,
    //   kubernetesPort,
    //   clusterName,
    //   grafanaURL,
    //   thanosPort,
    // };

    axios.post('http://localhost:3000/users/signin', formData)
    .then((res) => {
      if(res.data.message === 'Successful Login!') {
        setIsSignedIn(true);
      }
    }).catch(err => {
      console.log(err);
    });

    setFormData({
      username: '',
      password: ''
    })

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
    'text-primary-color font-semibold border-b-2 border-primary-color pt-1 text-2xl';

  return (
    <div className='flex flex-col justify-center sm:py-40'>
      <div className='relative w-1/2 py-3 sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-sapphire-blue/90 to-light-blue/90 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-gradient-to-r from-prussian-blue/90 to-teal-blue/90 shadow-lg sm:rounded-3xl sm:p-20'>
          <div className='max-w-md mx-auto mb-[-50px]'>
            <div className='flex place-content-center gap-x-20 mt-[-30px] mb-10'>
              <button
                className={active}
              >
                Welcome
              </button>
            </div>
            <div className='divide-y divide-gray-200'>
              <form
                onSubmit={submitFormData}
                className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'
              >
                <div>
                  {/* Email */}
                  <div className='relative'>
                    <input
                      type='username'
                      id='username'
                      className={inputField}
                      name='username'
                      autoComplete='off'
                      value={formData.username}
                      placeholder='Username'
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {/* Password */}
                  <div className='relative'>
                    <input
                      type='password'
                      id='password'
                      className={inputField}
                      name='password'
                      autoComplete='off'
                      value={formData.password}
                      placeholder='Your Password'
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className='relative'>
                    <button
                      type='submit'
                      className='px-8 py-3 mt-6 mr-2 cursor-pointer rounded-md text-lg focus:scale-95 border-off-white border-2 text-off-white hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]'
                    >
                      Sign In!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
