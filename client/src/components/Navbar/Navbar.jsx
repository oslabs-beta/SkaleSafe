/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */


const Navbar = () => {
  const location = useLocation();
  const { hash } = location;
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash, location]);

  // ADD ID BELOW
  const outLinks =
    'text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';
  // converted outLinks to variable, allowing LightOrDark to flip colors

  const loggedOut =
    'fixed w-screen h-20 flex flex-row items-center justify-between bg-honeydew/10 px-14 shadow-md shadow-honeydew/10';

  return (
    <nav className={loggedOut}>
        <div
          className="flex flex-row justify-evenly items-center w-60 h-12 rounded-full bg-sapphire-blue"
        >
          <img
            className="w-8 max-h-sm "
            src="../../../assets/skaleSafe-light.png"
            alt="A fish inside a shield"
          />
          <h1 className="text-primary-color text-3xl">
            SkaleSafe
          </h1>
        </div>

        <ul className="flex flex-row gap-x-4">
          {[
            ['Home', '#home'],
            ['About', '#about'],
            ['Features', '#features'],
            ['Demo', '#demo'],
            ['The Team', '#team'],
          ].map(([title, url]) => (
            <li key={title}>
              <a href={url} className={outLinks}>
                {title}
              </a>
            </li>
          ))}
        </ul>

      <ul className="flex flex-row gap-x-4">
         
      </ul>
    </nav>
  );
}

export default Navbar;
