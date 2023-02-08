import React from 'react';

function Demo() {
  return (
    <div
      id="demo"
      className="h-fit w-screen py-20 bg-gradient-to-tl from-teal-blue"
    >
      <h1
        id="demoText"
        className="text-center text-3xl text-honeydew font-bold uppercase tracking-wider underline underline-offset-8 decoration-4 mb-14"
      >
        Demo
      </h1>
      <div className="flex flex-col items-center gap-4 text-honeydew text-lg lg:text-3xl mx-20">
        <div className="flex flex-row items-center self-start">
          <video autoPlay loop className="w-2/3 max-w-lg ">
            <track default kind="captions" srcLang="en" />
            <source
              src="../../../../assets/login-and-scale-metrics.mp4"
              type="video/mp4"
            />
          </video>
          <p className="ml-5">
            Seemless login and immediate display of scaling metrics.
          </p>
        </div>
        <div className="flex flex-row items-center self-end">
          <p className="mr-5">
            See how many alerts you have and watch how active they are!
          </p>
          <video autoPlay loop className="w-2/3 max-w-lg">
            <track default kind="captions" srcLang="en" />
            <source
              src="../../../../assets/alert-metrics.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex flex-row items-center self-start">
          <video autoPlay loop className="w-2/3 max-w-lg">
            <track default kind="captions" srcLang="en" />
            <source src="../../../../assets/kubeview.mp4" type="video/mp4" />
          </video>
          <p className="ml-5">
            Display more information about the pods in your Kubernetes cluster.
          </p>
        </div>
        <div className="flex flex-row items-center self-end">
          <p className="mr-5">
            You can also monitor your Kubernetes cluster health!
          </p>
          <video autoPlay loop className="w-2/3 max-w-lg">
            <track default kind="captions" srcLang="en" />
            <source
              src="../../../../assets/cluster-health-metrics.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Demo;
