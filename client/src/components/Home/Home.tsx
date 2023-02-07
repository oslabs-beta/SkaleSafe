import React from 'react'

const Home =() => {

    return (
        <div id="home" className="h-[48rem] w-screen bg-gradient-to-tr from-teal-blue flex flex-row items-center justify-evenly">
            <h1 id='eleh1' className='text-6xl text-primary-color leading-relaxed tracking-wide m-0 p-0'>Auto-scaling<br/> made <span id='elespan' className='text-honeydew underline underline-offset-4 capitalize'>Better</span></h1>
                <img id='homeLogo' className="w-2/5" src='../../../assets/SkaleSafe-color.svg' alt='A fish inside a shield. SkaleSafe' />
        </div>
    )
}

export default Home;
