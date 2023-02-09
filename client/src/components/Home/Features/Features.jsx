/* eslint-disable max-len */
import React from 'react';

const Features = () => {
  return (
    <div
      id="features"
      className="h-fit w-screen py-20 bg-gradient-to-tl from-teal-blue"
    >
      <h1
        id="demoText"
        className="text-center text-3xl text-honeydew font-bold uppercase tracking-wider underline underline-offset-8 decoration-4 mt-5 mb-20"
      >
        Features
      </h1>
      <div className="flex flex-col items-center gap-4 gap-y-20 text-honeydew text-md lg:text-xl mx-20">
        <div className="flex flex-row items-center self-start">
          <video autoPlay loop muted className="w-2/3 max-w-lg">
            <track default kind="captions" srcLang="en" />
            <source
              src="../../../../assets/login-and-scale-metrics.mp4"
              type="video/mp4"
            />
          </video>
          <p className="ml-52">
            The Scaling Metrics tab serves a battery of graphs and data points 
            derived from autoscaling metrics, providing incisive insight into 
            the performance of a cluster’s autoscaling architecture, both in 
            its current state and over time.
          </p>
        </div>
        <div className="flex flex-row items-center self-end">
          <p className="mr-52">
            The Cluster Health tab visualizes an assortment of broader 
            metrics which together paint a picture of the cluster’s overall performance.
          </p>
          <video autoPlay loop muted className="w-2/3 max-w-lg">
            <track default kind="captions" srcLang="en" />
            <source
              src="../../../../assets/cluster-health-metrics.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex flex-row items-center self-start">
          <video autoPlay loop muted className="w-2/3 max-w-lg">
            <track default kind="captions" srcLang="en" />
            <source src="../../../../assets/kubeview.mp4" type="video/mp4" />
          </video>
          <p className="ml-52">
            The KubeView tab provides the user with an interactive visual 
            overview of all Kubernetes Objects currently deployed across 
            namespaces, showing their respective relationships to one another.
          </p>
        </div>
        <div className="flex flex-row items-center self-end">
          <p className="mr-52">
            The Alerts tab tracks activity regarding Prometheus alerts 
            that have been configured for this cluster.
          </p>
          <video autoPlay loop muted className="w-2/3 max-w-lg">
            <track default kind="captions" srcLang="en" />
            <source
              src="../../../../assets/alert-metrics.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Features;
