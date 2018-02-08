# Microservices

Everything regarding the micro-services you add to the project is kept here. Each microservice is a directory containing a `k8s.yaml` file which holds the Kubernetes objects required for it and a `src` directory, if continuous integration is configured.

# `api`

This custom microservice acts as the backend of the application.
It exposes endpoints throught which the frontend can POST a text and recieve `intent` of the text as a response in `JSON` format.
This microservices is written in python with the `flask` framework.Read more about it [here](https://github.com/AkshayRaman97/wit_integration/blob/master/microservices/api/README.md).

# `app`
The web app frontend for the application.Allows a user to enter a text and get the response from the wit client.
It serves a `react-js` application.
Read more about this microservice [here](https://github.com/AkshayRaman97/wit_integration/blob/master/microservices/app/app/README-ReactJS.md).
