import { Link, useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const [activeTab, setActiveTab] = useState(1);
    
    const links = 'border-b border-prussian-blue text-prussian-blue text-md px-2 py-1 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]'
    const sign = '';
    // useEffect(() => {
    //     // const = JSON.parse(localStorage.getItem('user'));
    //     // if(user) {
    //     //     setIsAuthenticated(true)
    //     // }
    // },[])

    return (
        <nav className="fixed w-screen h-16 flex flex-row items-center justify-between bg-honeydew/20 px-20">
            <div className="flex flex-row justify-between items-center">
                <img className="w-8 max-h-sm" src='../../../assets/SkaleSafe-nobg.png' alt="A fish inside a shield"/>
                <h1 className="text-primary-color text-3xl pl-3">SkaleSafe</h1>
            </div>
            
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
                        [['Home', '/home'], ['About', '/about'], ['Documentation', '/documentation'], ['The Team', '/theteam']].map(([title, url]) => (
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
                            <li>
                                <Link to={url}>
                                    <button className={links}>{title}</button>
                                </Link>
                            </li>
                        ))
                    )
                }
            </ul>

        </nav>
    )
}

export default Navbar;
