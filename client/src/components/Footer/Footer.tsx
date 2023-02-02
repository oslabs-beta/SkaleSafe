import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import React from "react";

const Footer = () => {
    return (
        <div id="footer" className="h-20 w-screen bg-sapphire-blue/30 flex flex-row justify-between items-center px-20">
            <ul className='text-honeydew'>
                <li>@2023 SkaleSafe Inc.</li>
                <li>All rights reserved</li>
            </ul>
            <ul className="w-10 flex flex-row justify-between">
                {[[<AiFillGithub size={30} className='fill-honeydew' />, "https://github.com/oslabs-beta/SkaleSafe#readme"], [<AiFillLinkedin size={30} className="fill-honeydew"/>, "https://www.linkedin.com/company/skalesafe"]].map( ([mediaTag, link]) => (
                    <li>
                        <a href={link}>
                            {mediaTag}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Footer;
