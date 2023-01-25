import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import React from "react";
import Team from "./contact";

const ContactUs = () => {

  const developer = 'flex flex-col rounded-xl items-center justify-between h-3/5 w-1/5 py-10 bg-gradient-to-tr from-sapphire-blue/80 to-light-blue/80'

  return (
    <div id="team" className='h-[48rem] w-screen px-20 bg-honeydew flex flex-col items-center justify-center'>
      <h1 className="text-3xl text-sapphire-blue font-bold">Contact Us</h1>
      <div className="h-4/5 w-full flex flex-rox gap-20 items-center justify-center">
        {Team.map((member) => (
            <div className={developer}>
              {/* image does not need to be static; can reference our profile pics in linked in for example */}
              <h2>{member.name}</h2>
              <img className="w-2/5 h-1/3 rounded-full shadow-lg shadow-honeydew" src={member.image} alt="A fish inside a shield"/> 
              <p>This is where the bio can go</p>
              <div className="flex flex-row flex-wrap gap-4">
                <a className="cursor-pointer bg-primary-color rounded-full p-2" href={member.linkedin} target='_blank' rel='noreferrer'>
                  <AiFillLinkedin size={30} className="fill-honeydew" />
                </a>
                <a className="cursor-pointer bg-primary-color rounded-full p-2" href={member.github} target='_blank' rel='noreferrer'>
                  <AiFillGithub  className="fill-honeydew" size={30}/>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    
  )
}

export default ContactUs;
