import React from 'react'
const About = () => {
    const shield = <img className="w-6 h-6" src='../../../assets/SkaleSafe-nobg.png' alt="A fish inside a shield. SkaleSafe. Scale with confidence."/>;

    return (
        <div id="about" className="h-[48rem] w-screen flex flex-col items-center justify-center gap-16">
            <h1 className="text-3xl text-honeydew font-bold uppercase tracking-wider border-b-4">About</h1>
            <div className="flex">
                {shield}
                <span className="text-xl text-honeydew px-4">SkaleSafe was created to provide comprehensive insight into the auto-scaling behaviors of Kubernetes clusters.</span>
            </div>
            <div className="flex">
                {shield}
                <span className="text-xl text-honeydew px-4">It incorporates tried and true technologies Prometheus and Grafana for customizable, easy-to-use visualization of scaling metrics.</span>
            </div>
            <div className="flex">
                {shield}
                <span className="text-xl text-honeydew px-4">SkaleSafe is a one-stop-shop for monitoring and optimization of your K8s auto-scaling architecture, saving you <span className="font-bold">time</span> and <span className="font-bold">money</span>.</span>
            </div>
        </div>
    )
}




export default About;
