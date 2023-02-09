/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
// import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import { setIsLoggedIn, setUserData } from '../../../redux/Slices/UserSlice';

import Modal from 'react-modal';
import SignInData from '../../interfaces/signin';
import axios from 'axios';
import { useAppDispatch } from '../../../redux/Hooks/Hooks';
import { useNavigate } from 'react-router-dom';

function SignInModal() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<SignInData>({
    username: '',
    password: '',
  });
  const dispatch = useAppDispatch();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitFormData = (e: any) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/users/signin', formData)
      .then((res) => {
        if (res.status === 200) {
          const { firstname, lastname, email, username } = res.data.user;
          dispatch(
            setUserData({
              firstname,
              lastname,
              email,
              username,
              // password: string
            })
          );
          dispatch(setIsLoggedIn(true));
          // Using Local Storage to track user/permissions:
          localStorage.setItem('username', username);
          setIsOpen(false);
          navigate('/dashboard');
        }
        if (res.status === 204) {
          setError('Incorrect Username and/or Password');
        }
      })
      .catch((err) => {
        setError('Could not make axios request');
        console.log(err);
      });

    setFormData({
      username: '',
      password: '',
    });
  };

  const inputField =
    'border-b-2 rounded-lg mb-4 h-11 px-2 border-sapphire-blue w-full focus:outline-none focus:border-fuzzy-wuzzy focus:border-b-3';
  const active =
    'text-prussian-blue font-semibold border-b-2 border-prussian-blue pt-1 text-2xl';

  const button =
    'px-8 py-3 mt-2 mr-2 mb-4 cursor-pointer rounded-md text-lg focus:scale-95 border-purple border-2 text-purple hover:text-off-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-purple hover:border-purple duration-[400ms,700ms] transition-[color,box-shadow]';

  const tryAgain = (
    <div className="text-error-red mt-8">
      Login credentials unrecognized: Please try again.
    </div>
  );

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]"
      >
        Sign In
      </button>
      <Modal
        id="signInModal"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick
        className="w-2/5 m-auto mt-40 px-6 rounded-lg shadow-xl bg-white border-b-8 border-primary-color"
      >
        <form className="p-12 relative" onSubmit={submitFormData}>
          <h1 className="text-2xl mt-4 font-bold mb-8 text-prussian-blue">
            Sign In:
          </h1>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute text-xl top-8 right-4 text-purple border-2 border-off-white shadow-sm rounded-full px-4 py-2 font-extrabold hover:scale-110 hover:text-sapphire-blue"
          >
            X
          </button>
          {/* Email */}
          <div className="relative">
            <input
              type="text"
              className={inputField}
              name="username"
              autoComplete="off"
              value={formData.username}
              placeholder="Email or Username"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* Password */}
          <div className="relative">
            <input
              type="password"
              id="password"
              className={inputField}
              name="password"
              autoComplete="off"
              value={formData.password}
              placeholder="Your Password"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          {error && <div className="text-red-500 text-1xl my-2">{error}</div>}
          <button className={button} type="submit" value="signup">
            Sign In
          </button>
          {/* DIVIDER */}
          {/* <div className='flex place-content-center pt-8 mb-12 h-10'>
            <div className='flex border-b border-dark-grey w-40' />
            <p className='text-sm text-dark-grey mt-[-3px] font-thin px-4'>OR</p>
            <div className='border-b border-dark-grey w-40' />
          </div> */}
          {/* OAUTH */}
          {/* <div className='flex place-content-center mt-10 gap-x-12 font-poppins tracking-wider'>
            <div className='mr-2 cursor-pointer rounded-md text-lg focus:scale-95 bg-grey border-2 border-grey'>
              
              <a className='flex items-center justify-center gap-3 text-white w-44 py-4 font-semibold '>
                <AiFillGithub size={30}/>
                GitHub
              </a>
            </div>

            <div className='mr-2 cursor-pointer rounded-md text-lg bg-fuzzy-wuzzy focus:scale-95 border-2 border-fuzzy-wuzzy hover:shadow-fuzzy-wuzzy'>
              <a
                href='/auth/google'
                className='flex items-center justify-center gap-3 w-44 items-center py-4 text-white font-semibold'
              >
                <AiFillGoogleCircle size={30}/>
                Google
              </a>
            </div>
          </div> */}
        </form>
      </Modal>
    </div>
  );
}

export default SignInModal;
