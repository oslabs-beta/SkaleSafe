# SkaleSafe &middot; ![Github](https://img.shields.io/github/repo-size/oslabs-beta/SkaleSafe) ![GitHub](https://img.shields.io/github/license/oslabs-beta/SkaleSafe) ![GitHub](https://img.shields.io/github/last-commit/oslabs-beta/SkaleSafe)


<br/>

## Table of Contents
 - [How to use SkaleSafe](#how-to-use-skalesafe)
 - [Installation](#installation)
   - [Prometheus Installation](#prometheus-installation)
   - [Grafana Installation](#grafana-installation)
   - [KubeView Installation](#kubeview-installation)
 - [Electron Guide](#Electron-Guide)
 - [Technologies Utilized](#Technologies-Utilized)
   - [Frontend Development](#Frontend-Development)
   - [Backend Development](#Backend-Development)
   - [Monitoring & Data Visualization](#Monitoring-&-Data-Visualization)
 - [License](#License)
 - [The Core Team](#The-Core-Team)
 
<br/>

## How to use Skalesafe
PENDING

<br/>

### Installation / Setup Instructions:
PENDING

<br/>

## Prometheus Installation:
First, we need to create a cluster namespace for all our monitoring components (first Prometheus, then alter Grafana + KubeView). We create a dedicated namespace, because we don't want all of our monitoring pods floating around in the default namespace.

The Prometheus Stack is a collection of pods intended to monitor the Kubernetes cluster. Here is the relevant documentation: &nbsp;[Prometheus Docs](https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/README.md).

1. Execute the following command to create a new namespace: monitoring.

   ```
   kubectl create namespace monitoring
   ```

2. All of the Prometheus configuration files mentioned in this section are created for you and hosted on GitHub. Clone this repo using the following command:

   ```
   git clone https://github.com/daniel-doody/setup-prometheus-kubernetes.git
   ```
  
3. Navigate to our cloned folder with the Prometheus files, apply the 'cluster-role.yaml' file to create a Cluster Role with the following RBAC policies: (get, watch, read). 

   ```
   kubectl apply -f cluster-role.yaml
   ```
   
4. Next, create a Config Map by applying 'config-map.yaml' to externalize the Prometheus configurations

   ```
   kubectl apply -f config-map.yaml
   ```

5. Create the Prometheus Deployment by applying 'prom-deploy.yaml'

   ```
   kubectl apply -f prom-deploy.yaml
   ```
  
6. Expose Prometheus using Ingress by applying the 'ingress-controller.yaml' file.

   ```
   kubectl apply -f cluster-role.yaml
   ```
   
   This exposes the ingress object on port 8080. To change the port, just edit the ingress file!
   
   ```
   apiVersion: extensions/v1beta1
   kind: Ingress
   metadata:
     name: prometheus-ui
     namespace: monitoring
     annotations:
       kubernetes.io/ingress.class: nginx
   spec:
     rules:
     # Use the host you used in your kubernetes Ingress Configurations
     - host: prometheus.example.com
       http:
         paths:
         - backend:
             serviceName: prometheus-service
             servicePort: 8080
    ```
    
   
<br/>


## Grafana Installation:
In our previous step, we set up Prometheus to monitor our cluster. Next, we will add Grafana for real-time cluster metric visualization.

For the complete list of setup instructions and customizations, please see: &nbsp;[Grafana Docs](https://grafana.com/docs/grafana/latest/setup-grafana/installation/kubernetes/).

1. All Grafana config files in this section are created for you and hosted on GitHub. Clone this repo using the following command:

   ```
   git clone https://github.com/daniel-doody/grafana-setup-kubernetes.git
   ```

2. Create the Grafana / Prometheus data source ConfigMap:

   Note: This is configured for Prometheus. If you have other data sources such as DataDog, you can add them with different YAMLs under the data section.
   Inside of your cloned Grafana folder, apply the 'graf-config.yaml'

   ```
   kubectl apply -f graf-config.yaml
   ```
  
3. Apply the Grafana service file to expose the Grafana port.
   ```
   kubectl apply -f graf-service.yaml
   ```
   
   This will expose Grafana on NodePort 32000:
   
   
   ```
   apiVersion: v1
   kind: Service
   metadata:
     name: grafana
     namespace: monitoring
     annotations:
         prometheus.io/scrape: 'true'
         prometheus.io/port:   '3000'
   spec:
     selector: 
       app: grafana
     type: NodePort  
     ports:
       - port: 3000
         targetPort: 3000
         nodePort: 32000
    ```
    
   <br/>
   
   Now you should be able to access the Grafana dashboard using any node IP on port 32000. Make sure the port is allowed in the firewall to be accessed from your workstation.   
   
   Use the following default username and password to log in:
   
   ```
   User: admin
   Pass: admin
   ```
   Once you log in with default credentials, it will prompt you to change the default password.
   
<br/>



## KubeView Installation:
PENDING

<br/>

## Electron Guide
PENDING

<br/>

## Technologies Utilized

<br/>


### Frontend Development

![Vite](https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=)
![Tailwind CSS](https://img.shields.io/static/v1?style=for-the-badge&message=Tailwind+CSS&color=222222&logo=Tailwind+CSS&logoColor=06B6D4&label=)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/static/v1?style=for-the-badge&message=Redux&color=764ABC&logo=Redux&logoColor=FFFFFF&label=)

<br/>

### Backend Development

![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=)
![Jest](https://img.shields.io/static/v1?style=for-the-badge&message=Jest&color=C21325&logo=Jest&logoColor=FFFFFF&label=)
![Axios](https://img.shields.io/static/v1?style=for-the-badge&message=Axios&color=5A29E4&logo=Axios&logoColor=FFFFFF&label=)
![Supertest](https://img.shields.io/static/v1?style=for-the-badge&message=SuperTest&color=E33332&logo=Testing+Library&logoColor=FFFFFF&label=)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

<br/>

### Monitoring & Data Visualization

![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)

<br/>

## License
Upon contributing, you agree that your contributions will be licensed under its [MIT License](/LICENSE).

<br/>

## The Team
Please feel free to reach out to us if you would like to contribute or if you have any questions or concerns!

- **Bethany Mattern:** &emsp; &emsp; &emsp;&emsp;[![Github](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)](https://github.com/bethanycable) [![LinkedIn](https://img.shields.io/static/v1?style=for-the-badge&message=LinkedIn&color=0A66C2&logo=LinkedIn&logoColor=FFFFFF&label=)](https://www.linkedin.com/in/bethany-a-mattern/)
- **Leonardo Brian Campos:** &emsp;[![Github](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)](https://github.com/MetaBrian)  [![LinkedIn](https://img.shields.io/static/v1?style=for-the-badge&message=LinkedIn&color=0A66C2&logo=LinkedIn&logoColor=FFFFFF&label=)](https://www.linkedin.com/in/leonardo-brian-campos/)
- **Daniel Doody:** &emsp; &emsp; &emsp; &emsp; &emsp;[![Github](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label)](https://github.com/daniel-doody) [![LinkedIn](https://img.shields.io/static/v1?style=for-the-badge&message=LinkedIn&color=0A66C2&logo=LinkedIn&logoColor=FFFFFF&label=)](https://www.linkedin.com/in/daniel-doody/)
- **Kelvin Shamy:** &emsp; &emsp; &emsp; &emsp; &emsp;[![Github](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)](https://github.com/KelvinShamy)  [![LinkedIn](https://img.shields.io/static/v1?style=for-the-badge&message=LinkedIn&color=0A66C2&logo=LinkedIn&logoColor=FFFFFF&label=)](https://www.linkedin.com/in/kelvin-shamy-839798a1/)
- **Sang Rea Han:** &emsp; &emsp; &emsp; &emsp;&emsp;[![Github](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=)](https://github.com/sxhanx) [![LinkedIn](https://img.shields.io/static/v1?style=for-the-badge&message=LinkedIn&color=0A66C2&logo=LinkedIn&logoColor=FFFFFF&label=)](https://github.com/sxhanx)
<br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br/>

## Show Your Support

If you like this project, please give it a ⭐️!
