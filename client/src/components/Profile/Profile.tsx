/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import Modal from 'react-modal';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/Hooks/Hooks';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const firstname = useAppSelector(
    (state: RootState) => state.userData.firstname
  );
  const lastname = useAppSelector(
    (state: RootState) => state.userData.lastname
  );
  const username = useAppSelector(
    (state: RootState) => state.userData.username
  );
  const email = useAppSelector((state: RootState) => state.userData.email);

  const outLinks =
    'text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="text-prussian-blue">
        My Profile
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick
        className="w-2/5 h-1/2 m-auto mt-40 px-6 rounded-lg shadow-xl bg-white"
      >
        <div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-[32%] top-48 text-xl text-purple border-2 border-off-white rounded-full px-4 py-2 font-extrabold hover:scale-110 hover:text-sapphire-blue"
          >
            X
          </button>
          <div className="w-96 mx-auto bg-off-white relative top-28 shadow rounded-lg">
            <div className="flex justify-center">
              <img
                id="profileBorder"
                src="../../../assets/profile.png"
                alt="profile photo"
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white"
              />
            </div>
            <div className="mt-16">
              <h1 className="font-bold text-center text-4xl">My Profile</h1>
              <div className="my-8 px-8">
                <a
                  href="#"
                  className="block rounded-lg text-center text-2xl leading-6 px-6 py-3 hover:text-light-blue hover:scale-110"
                >
                  Edit Profile Info
                </a>
              </div>
              <div className="w-full">
                <div className="mt-8 w-full flex flex-col items-center text-l">
                  <a className="w-full border-t py-4 pl-6 pr-3">
                    First Name:
                    <span className="font-bold"> {firstname}</span>
                  </a>

                  <a className="w-full border-t py-4 pl-6 pr-3">
                    Last Name:
                    <span className="font-bold"> {lastname}</span>
                  </a>

                  <a className="w-full border-t py-4 pl-6 pr-3">
                    Username:
                    <span className="font-bold"> {username}</span>
                  </a>

                  <a className="w-full border-t py-4 pl-6 pr-3">
                    Email:
                    <span className="font-bold"> {email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Profile;
