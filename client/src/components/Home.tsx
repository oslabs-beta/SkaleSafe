import React from 'react'

const Home =() => {
    return <div id="home" className="h-[48rem] w-screen bg-gradient-to-tr from-prussian-blue/80 to-teal-blue/80 flex flex-row items-center justify-center gap-20">
        <h1 className='text-6xl text-honeydew leading-relaxed tracking-wide'>Auto-scaling<br/> made <span className='text-primary-color underline underline-offset-4 capitalize'>easier</span></h1>
        
        <img className="w-1/5 h-3/5 lg:w-64 lg:h-80" src='../../../assets/SkaleSafe-nobg.png' alt='A fish inside a shield' />
    </div>
}

export default Home;
