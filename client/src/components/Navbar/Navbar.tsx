/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useAppDispatch, useAppSelector } from '../../../redux/Hooks/Hooks';

import { RootState } from '../../../redux/store';
// import LightOrDark from '../ModeSwitch/ModeSwitch';
import SignInModal from '../Signin/SigninModal';
import SignupModal from '../Signup/SignupModal';
import { setIsLoggedIn } from '../../../redux/Slices/UserSlice';

function Navbar() {
  const location = useLocation();
  const { hash } = location;
  const userName = useAppSelector(
    (state: RootState) => state.userData.firstname
  );
  const isLoggedIn = useAppSelector((state) => state.isLoggedIn);
  // const isLoggedIn = useAppSelector((state) => state.isLoggedIn);
  // const isLoggedIn = false;
  // const userName = 'John';
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('Navbar useEffect is firing');
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // ADD ID BELOW
  const outLinks =
    'text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';
  // converted outLinks to variable, allowing LightOrDark to flip colors

  const loggedOut =
    'fixed w-screen h-20 flex flex-row items-center justify-between bg-honeydew/10 px-14 shadow-md shadow-honeydew/10';
  const loggedIn =
    'w-screen h-20 flex flex-row items-center justify-between bg-gradient-to-r from-sapphire-blue/30 to-primary-color/30 px-20';

  return (
    <nav className={isLoggedIn ? loggedIn : loggedOut}>
      <Link to="/">
        <div
          id="backgroundoflogo"
          className="flex flex-row justify-evenly items-center bg-prussian-blue w-60 h-12 rounded-full"
          onClick={() => dispatch(setIsLoggedIn(false))}
        >
          <img
            id="navbarlogo"
            className="w-8 max-h-sm "
            src="../../../assets/skaleSafe-light.png"
            alt="A fish inside a shield"
          />
          <h1 id="colortestlogo" className="text-primary-color text-3xl pl-3">
            SkaleSafe
          </h1>
        </div>
      </Link>

      {!isLoggedIn ? (
        <ul className="flex flex-row gap-x-4">
          {[
            ['Home', '#home'],
            ['About', '#about'],
            ['Demo', '#demo'],
            ['Documentation', '#documentation'],
            ['The Team', '#team'],
          ].map(([title, url]) => (
            <li key={title}>
              <a href={url} className={outLinks}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div />
      )}

      <ul className="flex flex-row gap-x-4">
        {isLoggedIn ? (
          // PROFILE LINK CURRENTLY LEADS TO ADD CLUSTER INFO
          <li className="flex gap-x-4 items-center">
            <div id="navUser" className="text-honeydew text-xl font-semi py-1">
              {`Welcome ${userName}`}
            </div>
            <img
              className="w-10 h-10 rounded-full hover:scale-110 hover:brightness-110"
              src="../../../assets/profile.png"
              alt="profile photo"
            />
          </li>
        ) : (
          [<SignupModal />, <SignInModal />].map((modal) => (
            <li className="flex gap-x-8 items-center">{modal}</li>
          ))
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
