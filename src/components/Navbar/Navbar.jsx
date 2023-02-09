/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */


const Navbar = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('href').slice(1);
    const targetEl = document.getElementById(id);
    targetEl.scrollIntoView({behavior: 'smooth'}) ;
  };

  // ADD ID BELOW
  const links =
    'text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';
  // converted links to variable, allowing LightOrDark to flip colors

  const nav =
    'fixed w-screen h-20 flex flex-row items-center justify-between bg-honeydew/10 px-14 shadow-md shadow-honeydew/10';

  return (
    <nav className={nav}>
        <div
          className="flex flex-row justify-evenly items-center w-60 h-12 rounded-full bg-sapphire-blue"
        >
          <img
            className="w-8 max-h-sm"
            src="/skaleSafelight.png"
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
              <a href={url} className={links} onClick={handleClick}>
                {title}
              </a>
            </li>
          ))}
        </ul>

      <ul className="flex flex-row gap-x-4">
        <li className={links}>
          <a href='https://github.com/oslabs-beta/SkaleSafe#readme' target="_blank">Github</a>
        </li>
        <li className={links}>
          <a href='https://www.linkedin.com/company/skalesafe' target="_blank">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
