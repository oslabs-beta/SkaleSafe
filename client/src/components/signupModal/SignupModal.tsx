import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
// import { submitSignupFailure, submitSignupStart, submitSignupSuccess } from '../../../redux/slices/signupSlice';
import { useEffect, useState } from 'react';

import Modal from 'react-modal';
import React from 'react';
import SignUpData from '../../interfaces/signup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SignupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [formData, setFormData] = useState<SignUpData>({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    picture: '../../../assets/profile.png',
  });


  useEffect(() => {
    if(isSignedUp) {
      navigate('/dashboard');
    } else {
      console.log('There was an error signing up');
    }
  }, [isSignedUp, navigate]);

  // update form object after each keystroke
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // submit form: send post request to server @ /login
  const submitFormData = (e: any) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/users/signup', formData)
      .then((res) => {
        if (res.status === 200) {
          setIsSignedUp(true);
          navigate('/users/signup');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputField =
    'rounded-lg mb-2 py-6 h-11 px-2 w-full focus:outline-none border-2 border-off-white focus:border-fuzzy-wuzzy';

  const button =
    'px-8 py-3 mt-2 mr-2 mb-4 cursor-pointer rounded-md text-lg focus:scale-95 border-purple border-2 text-purple hover:text-off-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-purple hover:border-purple duration-[400ms,700ms] transition-[color,box-shadow]';

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className='text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]'
      >
        Sign Up
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        className='w-1/2 m-auto mt-40 px-6 rounded-lg shadow-xl bg-white border-b-8 border-primary-color'
      >
        <form className='p-12 relative' onSubmit={submitFormData}>
          <h1 className='text-2xl mt-4 font-bold mb-8 text-prussian-blue'>Create An Account:</h1>
          <button
            onClick={() => setIsOpen(false)}
            className='absolute text-xl top-8 right-4 text-purple border-2 rounded-full px-4 py-2 font-extrabold hover:scale-110 hover:text-sapphire-blue'
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
          <div className=''>
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
          <button className={button} type='submit' value='signup'>
            Sign Up
          </button>
          {/* DIVIDER */}
          <div className='flex place-content-center pt-8 mb-12 h-10'>
            <div className='flex border-b border-dark-grey w-40' />
            <p className='text-sm text-dark-grey mt-[-3px] font-thin px-4'>OR</p>
            <div className='border-b border-dark-grey w-40' />
          </div>
          {/* OAUTH */}
          <div className='flex place-content-center mt-10 gap-x-12 font-poppins tracking-wider'>
            <div className='mr-2 cursor-pointer rounded-md text-lg focus:scale-95 bg-grey border-2 border-grey'>
              {/* <img src='insert github image' /> */}
              
              <a className='flex items-center justify-center gap-3 text-white w-44 py-4 font-semibold '>
                <AiFillGithub size={30}/>
                GitHub
              </a>
            </div>

            <div className='mr-2 cursor-pointer rounded-md text-lg bg-fuzzy-wuzzy focus:scale-95 border-2 border-fuzzy-wuzzy hover:shadow-fuzzy-wuzzy'>
              {/* <img src=' insert google image' /> */}
              <a
                href='/auth/google'
                className='flex items-center justify-center gap-3 w-44 items-center py-4 text-white font-semibold'
              >
                <AiFillGoogleCircle size={30}/>
                Google
              </a>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
