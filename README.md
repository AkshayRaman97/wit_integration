# Wit integration

This project is a basic integration of the open source Natural Language Processing tool `Wit.ai`.
It should serve as a base repository for developers who wish to develop applications and chatbots using `wit` .
Read more about wit and it's features [here](https://wit.ai).


# Getting started

Follow these steps to get started with development using this project.


### hasura-cli
In order to get started with development you have to install the `hasura cli`.To install copy this code to your `terminal` .
```
$ curl -L https://hasura.io/install.sh | bash
```
Once installed login to hasura using
```
$ hasura login
```
A login page would open up in your default browser , sign up or login to access the `hasura dashboard`.
Clone the project by copying the following code to your terminal.
```
$ git clone https://github.com/AkshayRaman97/wit_integration.git
```
A clone of the project is created at your current location.The folder is named `wit_integration`.


# Files and Directories

The project (a.k.a. project directory) has a particular directory structure and it has to be maintained strictly, else `hasura cli` would not work as expected. The project directory is shown below:

```
.
├── hasura.yaml
├── clusters.yaml
├── conf
│   ├── authorized-keys.yaml
│   ├── auth.yaml
│   ├── ci.yaml
│   ├── domains.yaml
│   ├── filestore.yaml
│   ├── gateway.yaml
│   ├── http-directives.conf
│   ├── notify.yaml
│   ├── postgres.yaml
│   ├── routes.yaml
│   └── session-store.yaml
├── migrations
│   ├── 1504788327_create_table_userprofile.down.yaml
│   ├── 1504788327_create_table_userprofile.down.sql
│   ├── 1504788327_create_table_userprofile.up.yaml
│   └── 1504788327_create_table_userprofile.up.sql
└── microservices
    ├── app
    │   └── app
    |       ├ public /
    |       ├ src /
    |       ├ .gitignore
    |       ├ Readme.md
    |       ├ yarn.lock
    └── api
    |   ├── conf/
    |   ├── src/
    |   ├── k8s.yaml
    |   ├── Readme.md
    |   └── Dockerfile
    | .gitkeep
    | Readme.md
```

> Most of these files only exist for the proper functioning and deployment of our microservices in the hasura cluster. So we would not be working with them . The only folder of our interest is the `microservices` folder which contains the custom microservices created by us . Read more about the hasura project structure here [hasura_docs](https://docs.hasura.io/0.15/manual/tutorial/2-hasura-project.html).

## `microservices`

Contains the microservices created by the user in the project. Each microservice has a route which is of the format :

    <microservice-name>.<cluster-name>.hasura-app.io

### Create a microservice

To create a microservice use the following commands:

    # To list a number of templates for creating a microservice
    $ hasura microservice template-list

    # To create a microservice
    $ hasura microservice create <ms-name> --template=<template-name>

    # Add routes for the microservice
    $ hasura conf generate-route <ms-name> >> conf/routes.yaml
    $ hasura conf generate-remote <ms-name> >> conf/ci.yaml

To know more read the [hasura docs](https://docs.hasura.io/0.15/manual/hasuractl/hasura_microservice.html#hasura-microservice).

### Custom microservices

This project has 2 custom microservices.

### `api`

This custom microservice acts as the backend of the application.
It exposes endpoints throught which the frontend can POST a text and recieve `intent` of the text as a response in `JSON` format.
This microservices is written in python with the `flask` framework.Read more about it [here](https://github.com/AkshayRaman97/wit_integration/blob/master/microservices/api/README.md).

### `app`
The web app frontend for the application.Allows a user to enter a text and get the response from the wit client.
It serves a `react-js` application.
Read more about this microservice [here](https://github.com/AkshayRaman97/wit_integration/blob/master/microservices/app/app/README-ReactJS.md).
