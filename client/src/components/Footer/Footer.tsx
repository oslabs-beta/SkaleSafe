import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import React from "react";

const Footer = () => {
    return (
        <div id="footer" className="h-20 w-screen bg-honeydew/10 flex flex-row justify-between items-center px-10 text-honeydew">
            <ul className='text-sm'>
                <li>@2023 SkaleSafe Inc.</li>
                <li>All rights reserved</li>
            </ul>
            <ul className="w-24 flex flex-row justify-between">
                {[[<AiFillGithub size={40} className='fill-honeydew'/>, "https://github.com/oslabs-beta/SkaleSafe#readme", "Github"], [<AiFillLinkedin size={40} className="fill-honeydew"/>, "https://www.linkedin.com/company/skalesafe", "LinkedIn"]].map( ([mediaTag, link, title]) => (
                    <li>
                        <a href={link} target="_blank">
                            {mediaTag}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Footer;
