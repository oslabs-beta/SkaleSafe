import React from 'react'

const Home =() => {
    return (
        <div id="home" className="h-[48rem] w-screen bg-gradient-to-tr from-teal-blue flex flex-row items-center justify-evenly">
            <h1 className='text-6xl text-honeydew leading-relaxed tracking-wide m-0 p-0'>Auto-scaling<br/> made <span className='text-primary-color underline underline-offset-4 capitalize'>easier</span></h1>
                <img className="w-2/5" src='../../../assets/SkaleSafe-color.svg' alt='A fish inside a shield. SkaleSafe' />
            
        </div>
    )
}

export default Home;
