import { Link } from "react-router-dom"
import React from "react";

const Navbar = () => {
    return (
        <nav className="w-screen h-24 flex flex-row items-center justify-end bg-blue-200">
            <ul className="flex flex-row gap-x-3 mr-8 ">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
