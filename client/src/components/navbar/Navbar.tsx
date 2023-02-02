import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import SignInModal from '../Signin/SigninModal';
// import Profile from '../profile/Profile'
import SignupModal from '../signupModal/SignupModal';
import { useAppSelector } from '../../../redux/hooks/hooks';

const Navbar = () => {
  const location = useLocation();
    const { hash } = location;
    // const pathname = location.pathname;


    const userName = useAppSelector((state) => state.user.userData.firstname);
    const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);

    //ADD ID BELOW
    const outLinks =
    'text-honeydew text-xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';

    const inLinks = 'text-md px-2 py-1'
    
    useEffect(() => {
        if(hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if(element) {
                element.scrollIntoView({ behavior: 'smooth'});
            }
        }

        else if(location.pathname === '/home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    },[hash, location]);

    const loggedOut = "fixed w-screen h-20 flex flex-row items-center justify-between bg-honeydew/10 px-14 shadow-md shadow-honeydew/10";
    const loggedIn = "w-screen h-20 flex flex-row items-center justify-between bg-gradient-to-r from-sapphire-blue/30 to-primary-color/30 px-20"

    const name = 'TestiBoi';

    return (
        <nav className={isLoggedIn ? loggedIn : loggedOut}>
            <Link to='/home'>
                <div id='backgroundoflogo' className="flex flex-row justify-evenly items-center bg-prussian-blue w-60 h-12 rounded-full">
                    <img className="w-8 max-h-sm " src='../../../assets/SkaleSafe-light.png' alt="A fish inside a shield"/>
                    <h1 id='colortestlogo' className="text-primary-color text-3xl pl-3">SkaleSafe</h1>
                </div>
            </Link>
                {/* <button className='border-b border-prussian-blue text-prussian-blue text-md px-2 py-1 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]' onClick={() => window.open('https://github.com/oslabs-beta/SkaleSafe', '_blank')}>
                    GitHub
                </button> */}

            <ul className="flex flex-row gap-x-4">
                {isLoggedIn ? (
                        [['Add Cluster', '/dashboard/addCluster'], ['My Dashboard', '/dashboard']].map(([title, url]) => (
                            <li>
                                <Link to={url}>
                                    <button className={outLinks}>{title}</button>
                                </Link>
                            </li>
                        ))
                    ) : (
                        [['Home', '/home'], ['About', '#about'], ['Demo', '#demo'], ['Documentation', '#documentation'], ['The Team', '#team']].map(([title, url]) => (
                            <li>
                                <Link to={url}>
                                    <button className={outLinks}>{title}</button>
                                </Link>
                            </li>
                        ))
                    )
                }
            </ul>
            <ul className="flex flex-row gap-x-4">
                {isLoggedIn ? (
                    // PROFILE LINK CURRENTLY LEADS TO ADD CLUSTER INFO
                    [[`Welcome, ${userName}`, '/dashboard/profile']].map(([title, url]) => (
                        <li className='flex gap-x-4 items-center'>
                            <div className='text-honeydew text-xl font-semi px-2 py-1'>{title}</div>
                            <Link to={url} className="flex flex-row gap-x-4">
                                <img className='w-10 h-10 rounded-full hover:scale-110 hover:brightness-110' src='../../../assets/profile.png' alt='profile photo'/>
                            </Link>
                        </li>
                    ))
                    ) : (
                        [<SignupModal />, <SignInModal />].map((modal) => (
                            <li className='flex gap-x-8 items-center'>
                              {modal}
                            </li>
                        ))
                    )
                }
            </ul>
        </nav>
    )
        
}

export default Navbar;
