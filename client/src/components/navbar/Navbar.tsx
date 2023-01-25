import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { SignupModal } from '../signupModal/SignupModal';

const Navbar = () => {
  const location = useLocation();
    const { hash } = location;
    const pathname = location.pathname;
    const [activeTab, setActiveTab] = useState(1);

  const links =
    'border-b border-prussian-blue text-prussian-blue text-md px-2 py-1 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';
    
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

    return (
        <nav className="fixed w-screen h-16 flex flex-row items-center justify-between bg-honeydew/20 px-20">
            <Link to='/home'>
                <div className="flex flex-row justify-between items-center">
                    <img className="w-8 max-h-sm" src='../../../assets/SkaleSafe-nobg.png' alt="A fish inside a shield"/>
                    <h1 className="text-primary-color text-3xl pl-3">SkaleSafe</h1>
                </div>
            </Link>
                                    <button className='border-b border-prussian-blue text-prussian-blue text-md px-2 py-1 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]' onClick={() => window.open('https://github.com/oslabs-beta/SkaleSafe', '_blank')}>
                                        GitHub
                                    </button>

            <ul className="flex flex-row gap-x-4">
                {pathname === '/dashboard' ? (
                        [['Add Cluster', '/dashboard/addCluster'], ['My Dashboard', '/dashboard'], ['The Team', '/dashboard/theteam']].map(([title, url]) => (
                            <li>
                                <Link to={url}>
                                    <button className={links}>{title}</button>
                                </Link>
                            </li>
                        ))
                    ) : (
                        [['Home', '/home'], ['About', '/about'], ['Demo', '/demo'], ['Documentation', '/documentation'], ['The Team', '/theteam']].map(([title, url]) => (
                            <li>
                                <Link to={url}>
                                    <button className={links}>{title}</button>
                                </Link>
                            </li>
                        ))
                    )
                }
            </ul>
            <ul className="flex flex-row gap-x-4 mr-8 ">
                {pathname === '/dashboard' ? (
                        <li>
                            <Link to='/home'>
                                <button className={links}>Logout</button>
                            </Link>
                        </li>
                    ) : (
                        [['Sign In', '/users/signin'], ['Sign Up', '/users/signup']].map(([title, url]) => (
                            <li className='flex gap-x-8 items-center'>
                                <Link to={url}>
                                    <SignupModal />
                                    {/* <button className={links}>{title}</button> */}
                                </Link>
                                
                            </li>
                        ))
                    )
                }
                
            </ul>
            <button onClick={() => window.open('https://github.com/oslabs-beta/SkaleSafe', '_blank')} value='GitHub Repo'> </button>
        </nav>
    )
}

export default Navbar;
