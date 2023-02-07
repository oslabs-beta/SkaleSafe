/* eslint-disable max-len */
import React from 'react';

function About() {
  return (
    <div
      id="about"
      className="h-[48rem] w-screen flex flex-col items-center justify-center gap-16 px-10"
    >
      <h1
        id="aboutText"
        className="text-3xl text-honeydew font-bold uppercase tracking-wider border-b-4"
      >
        About
      </h1>
      <div className="flex">
        <img
          id="aboutbullets1"
          className="w-6 h-6"
          src="../../../assets/skaleSafe-light.png"
          alt="A fish inside a shield. SkaleSafe. Scale with confidence."
        />
        <span id="bullet1" className="text-xl text-honeydew px-4">
          SkaleSafe was created to provide comprehensive insight into the
          auto-scaling behaviors of Kubernetes clusters.
        </span>
      </div>
      <div className="flex">
        <img
          id="aboutbullets2"
          className="w-6 h-6"
          src="../../../assets/skaleSafe-light.png"
          alt="A fish inside a shield. SkaleSafe. Scale with confidence."
        />
        <span id="bullet2" className="text-xl text-honeydew px-4">
          It incorporates tried and true technologies Prometheus, Grafana and
          Kubeview for interactive, easy-to-use visualizations.
        </span>
      </div>
      <div className="flex">
        <img
          id="aboutbullets2"
          className="w-6 h-6"
          src="../../../assets/skaleSafe-light.png"
          alt="A fish inside a shield. SkaleSafe. Scale with confidence."
        />
        <span id="bullet2" className="text-xl text-honeydew px-4">
          SkaleSafe scrapes detailed cluster metrics and transforms them into a
          powerful suite of elegant and intuitive graphs and displays.
        </span>
      </div>
      <div className="flex">
        <img
          id="aboutbullets3"
          className="w-6 h-6"
          src="../../../assets/skaleSafe-light.png"
          alt="A fish inside a shield. SkaleSafe. Scale with confidence."
        />
        <span id="bullet3" className="text-xl text-honeydew px-4">
          This application is your one-stop-shop for monitoring the performance
          of your K8s auto-scaling architecture, saving you{' '}
          <span className="font-bold">time</span> and{' '}
          <span className="font-bold">money</span>.
        </span>
      </div>
    </div>
  );
}

export default About;
