import { Link } from "react-router-dom"
import React from "react";

const Navbar = () => {

    const links = 'border-2 border-off-white rounded-lg text-off-white px-8 py-2 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]'

    return (
        <nav className="w-screen h-24 flex flex-row items-center justify-end from-transparent bg-gradient-to-r from-prussian-blue/90 to-teal-blue/90">
            <ul className="flex flex-row gap-x-4 mr-8 ">
                {[['Home', '/'], ['Sign In', '/signin'], ['Sign Up', '/signup']].map(([title, url]) => (
                        <li>
                            <Link to={url}>
                                <button className={links}>{title}</button>
                            </Link>
                        </li>
                ))}
                
                
                {/* <li>
                    <Link to='/'><button>Home</button></Link>
                </li>
                <li>
                    <Link to='/signin'><button>Sign In</button></Link>
                </li>
                <li>
                    <Link to='/signup'><button>Sign Up</button></Link>
                </li> */}
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
