import { Link, useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const links = 'border-2 border-off-white rounded-lg text-off-white px-8 py-2 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]'

    useEffect(() => {
        // const = JSON.parse(localStorage.getItem('user'));
        // if(user) {
        //     setIsAuthenticated(true)
        // }
    },[])


    return (
        <nav className="w-screen h-24 flex flex-row items-center justify-between from-transparent bg-gradient-to-r from-prussian-blue to-teal-blue/90">
            <div className="flex flex-row justify-between items-center ml-8">
                <img className="w-10 max-h-sm" src='../../../assets/SkaleSafe-nobg.png' alt="A fish inside a shield"/>
                <h1 className="text-primary-color text-3xl pl-3">SkaleSafe</h1>
            </div>
            
            <ul className="flex flex-row gap-x-4 mr-8 ">
                {pathname === '/dashboard' ? (
                    [['Add Cluster', '/dahsboard/addCluster'], ['My Dashboard', '/dashboard'], ['Log Out', '/home']].map(([title, url]) => (
                        <li>
                            <Link to={url}>
                                <button className={links}>{title}</button>
                            </Link>
                        </li>
                        ))
                    ) : (
                        [['Home', '/home'], ['Sign In', '/user/signin'], ['Sign Up', '/user/signup']].map(([title, url]) => (
                        <li>
                            <Link to={url}>
                                <button className={links}>{title}</button>
                            </Link>
                        </li>
                        ))
                    )
                }
                
                {/* <li>
                    <Link to='/addCluster'><button>Add a Cluster</button></Link>
                </li>
                <li>
                    <Link to='/dashboard'><button>My Dashboard</button></Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navbar;
