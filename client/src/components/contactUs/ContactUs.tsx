import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import React from "react";
import Team from "./contact";

const ContactUs = () => {

  const developer = 'flex flex-col rounded-xl items-center justify-between h-4/5 w-1/5 py-10 bg-gradient-to-tr from-primary-color/70 to-light-blue/70 border border-teal-blue shadow-lg shadow-current'

  return (
    <div id="team" className='h-[48rem] w-screen px-20 bg-gradient-to-tr from-prussian-blue/60 to-teal-blue/60 flex flex-col items-center justify-center'>
      <h1 className="text-3xl text-honeydew font-bold uppercase tracking-wider border-b-4">Meet The Team</h1>
      <div className="h-4/5 w-full flex flex-rox gap-20 items-center justify-center">
        {Team.map((member) => (
            <div className={developer}>
              <h2 className="text-xl font-bold text-prussian-blue tracking-wide">{member.name}</h2>
              <img className="lg:w-36 lg:h-36 md:w-32 md:h-32 rounded-full border-2 border-honeydew shadow-sm shadow-honeydew" src={member.image} alt="A fish inside a shield"/> 
              <p>This is where the bio can go</p>
              <div className="flex flex-row gap-8">
                <a className="cursor-pointer bg-sapphire-blue rounded-full p-2" href={member.linkedin} target='_blank' rel='noreferrer'>
                  <AiFillLinkedin size={30} className="fill-honeydew" />
                </a>
                <a className="cursor-pointer bg-sapphire-blue rounded-full p-2" href={member.github} target='_blank' rel='noreferrer'>
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
