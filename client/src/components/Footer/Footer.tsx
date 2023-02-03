import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import React from "react";
import { SiGmail } from "react-icons/si"

const Footer = () => {
    return (
        <div id="footer" className="h-20 w-screen bg-honeydew/10 flex flex-row justify-between items-center px-20 text-honeydew">
            <ul className='text-sm'>
                <li>@2023 SkaleSafe Inc.</li>
                <li>All rights reserved</li>
            </ul>
            <ul className="flex flex-row flex-wrap justify-between items-center">
                {[[<AiFillGithub size={30} className='fill-honeydew' />, "https://github.com/oslabs-beta/SkaleSafe#readme"], [<AiFillLinkedin size={30} className="fill-honeydew"/>, "https://www.linkedin.com/company/skalesafe"]].map( ([mediaTag, link]) => (
                    <li>
                        <a href={link}>
                            {mediaTag}
                        </a>
                    </li>
                ))}
                {/* <li>
                    skalesafeteam@gmail.com
                </li> */}
            </ul>
        </div>
    )
}

export default Footer;
