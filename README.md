# Wit integration

This project is a basic integration of the open source Natural Language Processing tool `Wit.ai`.
It should serve as a base repository for developers who wish to develop applications and chatbots using `wit` .
Read more about wit and it's features [here](https://wit.ai).

## Getting started
In order to get started with development you have to install the `hasura cli`.
To install copy this code to your linux shell.
```
$ curl -L https://hasura.io/install.sh | bash
```
Once installed login to hasura using
```
$ hasura login
```
A login page would open in your default browser , sign up or login to access the `hasura dashboard`.
Clone the project by copying the following code to your terminal.
```
$ git clone https://github.com/AkshayRaman97/wit_integration.git
```
A clone of the project is created at your current location.The folder is named `wit_integration`.

## Files and Directories

The project (a.k.a. project directory) has a particular directory structure and it has to be maintained strictly, else `hasura` cli would not work as expected. The project directory is shown below:

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
### `hasura.yaml`

This file contains some metadata about the project, namely a name, description and some keywords. Also contains `platformVersion` which says which Hasura platform version is compatible with this project.

### `clusters.yaml`

Info about the clusters added to this project can be found in this file. Each cluster is defined by it's name allotted by Hasura. While adding the cluster to the project you are prompted to give an alias, which is just hasura by default. The `kubeContext` mentions the name of kubernetes context used to access the cluster, which is also managed by hasura. The `config` key denotes the location of cluster's metadata on the cluster itself. This information is parsed and cluster's metadata is appended while conf is rendered. `data` key is for holding custom variables that you can define.
```yaml
- name: h34-ambitious93-stg
  alias: hasura
  kubeContext: h34-ambitious93-stg
  config:
    configmap: controller-conf
    namespace: hasura
  data: null  
```
### `conf`
* ##### `authorized-keys.yaml`
    * SSH keys allowed to access the cluster
    * One public key per line
* ##### `*.yaml`
    * Configuration for the cluster, split into various yaml files

### `migrations`
Database migration files are kept in this directory


> Most of these files only exist for the proper functioning and deployment of our microservices in the kubernetes cluster. So we would not be working with them . The only folders of our interest is the `microservices` folder which contains the custom microservices created by us.

### `microservices`

Contains the microservices created by the user in the project. Each microservice has a route which is of the format :

    <microservice-name>.<cluster-name>.hasura-app.io

##### Create a microservice

To create a microservice use the following commands:

    # To list a number of templates for creating a microservice
    $ hasura microservice template-list
    # To create a microservice
    $ hasura microservice create <ms-name> --template=<template-name>
    # Add routes for the microservice
    $ hasura conf generate-route <ms-name> >> conf/routes.yaml
    $ hasura conf generate-remote <ms-name> >> conf/ci.yaml

To know more read the [hasura docs](https://docs.hasura.io/0.15/manual/hasuractl/hasura_microservice.html#hasura-microservice).

#### Custom microservices
This project has 2 custom microservices.
##### 1. api
* The backend of the entire application.
* Exposes endpoints to be used by the web and mobile apps.
* Read in detail about this microservice at [lol]().


##### 2. app
* The web app frontend for the application.
* Allows a user to enter a text and get the response from the wit client.
* Read in detail about this microservice at [lol]().
