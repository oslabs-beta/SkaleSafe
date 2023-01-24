import { useEffect, useState } from 'react';
import React from 'react';
import SignUpData from '../../interfaces/signup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
type Props = {};

export const SignupModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();
  const [clusterURL, setClusterURL] = useState('');
  const [kubernetesPort, setKubernetesPort] = useState('');
  const [clusterName, setClusterName] = useState('');
  const [grafanaURL, setGrafanaURL] = useState('');
  const [thanosPort, setThanosPort] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [formData, setFormData] = useState<SignUpData>({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  });

  // update form object after each keystroke
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // submit form: send post request to server @ /login
  const submitFormData = (e?: any) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/users/signup', formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsSignedUp(true);
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
    });
  };

  const inputField =
    ' rounded-lg mb-2 py-6 h-11 px-2 w-full focus:outline-none border-2 border-off-white focus:border-purple';
  const active =
    'text-primary-color font-semibold border-b-2 border-primary-color pt-1 text-lg';

  const nonActive = 'text-lg text-off-white hover:text-purple hover:border-b-2';

  const button =
    'px-8 py-3 mt-2 mr-2 mb-4 cursor-pointer rounded-md text-lg focus:scale-95 border-purple border-2 text-purple hover:text-off-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-purple hover:border-purple duration-[400ms,700ms] transition-[color,box-shadow]';

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className='bg-off-white text-black font-bold py-2 px-8 shadow-md rounded-md hover:shadow-lg hover:scale-105hover:rounded-lg'
      >
        Sign Up
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        className='w-1/2 m-auto mt-10 px-6 rounded-lg shadow-xl bg-white border-b-8 border-primary-color '
      >
        <form className='p-12 relative' onSubmit={submitFormData}>
          <h1 className='text-2xl mt-4 font-bold mb-10'>Create An Account:</h1>
          <button
            onClick={() => setIsOpen(false)}
            className='absolute text-xl top-4 right-6 text-purple font-extrabold hover:scale-110 hover:text-gray-500'
          >
            X
          </button>
          <div className=''>
            <input
              type='firstname'
              id='first-name'
              className={inputField}
              name='firstname'
              autoComplete='off'
              value={formData.firstname}
              placeholder='First Name'
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className=''>
            <input
              type='lastname'
              id='last-name'
              className={inputField}
              name='lastname'
              autoComplete='off'
              placeholder='Last Name'
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className=''>
            <input
              type='email'
              id='email'
              className={inputField}
              name='email'
              autoComplete='off'
              value={formData.email}
              placeholder='Email'
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='mb-2'>
            <input
              type='password'
              id='password'
              className={inputField}
              name='password'
              autoComplete='off'
              value={formData.password}
              placeholder='Password'
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className={button} type='submit' value='login'>
            Sign Up
          </button>
          {/* DIVIDER */}
          <div className='flex place-content-center pt-8 mb-12 h-10'>
            <div className='flex border-b border-gray-300 w-40' />
            <p className='text-sm text-gray-600 mt-[-3px] font-thin px-4'>OR</p>
            <div className='border-b border-gray-300 w-40' />
          </div>
          {/* OAUTH */}
          <div className='flex place-content-center mt-10 gap-x-12'>
            <div className='flex items-center justify-center mr-2 cursor-pointer rounded-md text-lg focus:scale-95 border border-gray-800 hover:shadow-[inset_13rem_0_0_0] hover:shadow-gray-900 hover:border-purple duration-[400ms,700ms] transition-[color,box-shadow]'>
              {/* <img src='insert github image' /> */}
              <a className='text-black text-center hover:text-white w-44 py-4 font-semibold'>
                GitHub
              </a>
            </div>

            <div className='flex items-center justify-center mr-2 cursor-pointer rounded-md text-lg focus:scale-95 border-2 border-fuzzy-wuzzy hover:shadow-[inset_13rem_0_0_0] hover:shadow-fuzzy-wuzzy hover:border-fuzzy-wuzzy duration-[400ms,700ms] transition-[color,box-shadow]'>
              {/* <img src=' insert google image' /> */}
              <a
                href='/auth/google'
                className='text-fuzzy-wuzzy w-44 text-center items-center py-4 justify-center hover:text-white font-semibold'
              >
                Google
              </a>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
