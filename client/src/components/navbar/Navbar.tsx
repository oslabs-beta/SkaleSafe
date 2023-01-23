import { Link } from "react-router-dom"
import React from "react";

const Navbar = () => {
    return (
        <nav className="w-screen h-24 flex flex-row items-center justify-center bg-blue-200">
            <ul className="flex flex-row gap-x-3 mr-8 ">
                <li>
                    <Link to='/'><button>Home</button></Link>
                </li>
                <li>
                    <Link to='/signin'><button>Sign In</button></Link>
                </li>
                <li>
                    <Link to='/signup'><button>Sign Up</button></Link>
                </li>
                <li>
                    <Link to='/addCluster'><button>Add a Cluster</button></Link>
                </li>
                <li>
                    <Link to='/dashboard'><button>My Dashboard</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
