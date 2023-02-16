import React, { useState } from 'react';

import Modal from 'react-modal';
import axios from 'axios';
import { server } from '../../data/server';
const ForgotPass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitPassForm = (event: any) => {
    event.preventDefault();

    axios
      .post(`${server}/users/signin`, formData)
      .then((res) => {
        if (res.status === 200) {
        }
        if (res.status === 204) {
        }
      })
      .catch((err) => {});

    setFormData({
      username: '',
      password: '',
    });
  };

  const inputField =
    'border-b-2 rounded-lg mb-4 h-11 px-2 border-sapphire-blue w-full focus:outline-none focus:border-fuzzy-wuzzy focus:border-b-3';

  return (
    <div className="w-2/5">
      <button
        onClick={() => setIsOpen(true)}
        className="text-prussian-blue text-lg font-semi px-2 py-1 border-b"
      >
        Forgot Password?
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <form onSubmit={submitPassForm}>
          <h1 className="text-2xl mt-4 font-bold mb-8 text-prussian-blue">
            Forgot Password:
          </h1>
          <button
            type="submit"
            onClick={() => setIsOpen(false)}
            className="absolute text-xl top-8 right-4 text-purple border-2 border-off-white shadow-sm rounded-full px-4 py-2 font-extrabold hover:scale-110 hover:text-sapphire-blue"
          >
            X
          </button>
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
        </form>
      </Modal>
    </div>
  );
};

export default ForgotPass;
