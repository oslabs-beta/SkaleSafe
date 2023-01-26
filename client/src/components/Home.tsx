import React from 'react'

const Home =() => {
    return (
        <div id="home" className="h-[48rem] w-screen bg-gradient-to-tr from-prussian-blue/60 to-teal-blue/60 flex flex-row items-center justify-evenly">
            <h1 className='text-6xl text-honeydew leading-relaxed tracking-wide'>Auto-scaling<br/> made <span className='text-primary-color underline underline-offset-4 capitalize'>easier</span></h1>
        
            <img className="w-2/5 h-3/5" src='../../../assets/SkaleSafe.png' alt='A fish inside a shield. SkaleSafe' />
        </div>
    )
}

export default Home;
