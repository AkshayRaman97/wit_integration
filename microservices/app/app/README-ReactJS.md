# **app** microservice

This microservice acts as the frontend for the **Wit.ai** - **Hasura** platform integration.

The entire details of this project can be found here - [wit_integration](https://github.com/AkshayRaman97/wit_integration/blob/master/README.md)

# Table of Contents

- [**app** microservice](#--app---microservice)
- [Table of Contents](#table-of-contents)
- [Setting up the project](#setting-up-the-project)
  * [Cloning the project](#cloning-the-project)
  * [Files and Directories](#files-and-directories)
    + [Project structure](#project-structure)
    + [`/microservices`](#--microservices-)
    + [`/microservices/app`](#--microservices-app-)
- [Setting up your microservice](#setting-up-your-microservice)
- [Setting up your hasura cluster](#setting-up-your-hasura-cluster)
  * [Install `hasura-cli`.](#install--hasura-cli-)
  * [Login to hasura](#login-to-hasura)
  * [Create a cluster](#create-a-cluster)
  * [Add cluster to your project](#add-cluster-to-your-project)
  * [Pushing your code to the cluster](#pushing-your-code-to-the-cluster)
- [Working of the application](#working-of-the-application)
- [Working examples:](#working-examples-)
  * [Greeting](#greeting)
  * [Get weather](#get-weather)
  * [Get tweets](#get-tweets)
  * [Exit](#exit)
  * [Error](#error)
- [Using your own Wit API](#using-your-own-wit-api)
- [Contributors](#contributors)

# Setting up the project

In order to use this repository as a base repository for your own project follow these steps.

## Cloning the project

To clone the project to your system, you need to have `git` installed. To check if git is already installed use

```bash
$ git --version


git version 2.14.1
```
If not installed follow the instructions in this link - [Git installation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Open the terminal in your pc and navigate to your desired folder.
Then clone the repository using `git clone`.

```bash
# Navigate to desired folder . Example: /user/project
$ cd home/user/projects

# Clone the repository
$ git clone https://github.com/AkshayRaman97/wit_integration.git
```

A folder `wit_integration` would be cloned to the current folder. If the cloning was done successfully proceed to the next section to know about the project structure.

## Files and Directories

### Project structure

Inside the `wit_integration` folder you will find a directory structure like this.

![file_directory](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/master_dir.png)

> *Most of the folders here are used by the `hasura` platform to host our projects on a cluster. They are not meant to be tampered with unless you really know what you're doing. The folders discussed below are the ones of our interest. However if you are interested to know more about the hasura project structure check out this [link](https://docs.hasura.io/0.15/manual/project/index.html).*

### `/microservices`

Folder structure :

![ms_dir](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/ms_dir.png)

Contains the custom microservices created by us. This project has 2 microservices `api` and `app` as shown above. Each microservice has a definite structure to be followed.

### `/microservices/app`

Folder structure :

![app_dir](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/app_dir.png)

The frontend of the project. Uses the `react-js` javascript framework. Edit the `App.js` file to get started.

References:

* [React documentation](https://reactjs.org/docs/hello-world.html).
* [hasura/hello-react](https://github.com/hasura/hello-react).

# Setting up your microservice

First we need to install `node.js`.

Install `node.js` using this link - [Node](https://nodejs.org/en/download/)

Node.js comes with `npm` pre-installed. npm is short for `node package manager` and we'll be using it to manage our packages for the react project.

Follow the below instructions to setup your environment.

```bash
# Navigate to project folder
$ cd /home/user/projects/wit_integration

# Navigate to app microservice folder
$ cd microservices/app/app

# Install necessary packages
$ npm install

# To start the react application on your browser
$ npm start
```

The `npm install` command will take some time to complete. At the end of it there will be `node_modules` folder which contains the necessary packages for development.

The `npm start` command opens the application on a browser window. You can start editing your code in `App.js` and see the changes immediately on the browser since the application reloads everytime you save your changes.

> Be sure to add the node_modules file to your `.gitignore` file since it is a very large folder and it is a general practice to avoid it while pushing to a repository for efficient development.

# Setting up your hasura cluster
In order to host our project on the cloud for everyone to see we'll use the `hasura` platform.
Follow the instructions in this section to setup a cluster to which you can push your project folder.

## Install `hasura-cli`.

We'll need to install the hasura command line interface to use the hasura platform. To install use

```bash
$ curl -L https://hasura.io/install.sh | bash
```

To check if it successfully installed use

```bash
$ hasura version


hasura version: v0.2.28
```

## Login to hasura

Create an account or login to hasura using

```bash
$ hasura login
```
Your browser will open a link where you can register or login to hasura.

## Create a cluster

To create a cluster you can use the hasura free tier system.

```bash
$ hasura cluster create --type=free


INFO Creating a Hasura cluster...
INFO Hasura cluster created                        cluster=alarming52
INFO Initializing the cluster...
INFO Cluster initialized
INFO Kubernetes context has been added to this system  context=alarming52
```

Note your cluster name. In this case it is `alarming52`.

## Add cluster to your project

To add a cluster to this project use the following commands.

```bash
# Add cluster
$ hasura cluster add alarming52 -c hasura

# Set this cluster as the default
$ hasura cluster set-default hasura

# Add ssh-key
$ hasura ssh-key add -c hasura
```

## Pushing your code to the cluster

Follow the below steps.

```bash
# Go to your project folder
$ cd /home/user/projects/wit_integration

# Add all files for commit
$ git add .

# Commit files
$ git commit -m "First commit"

# Push to hasura cluster
$ git push hasura master
```
This will take some time to execute. After it is done use the following command to view your app.

```bash
# To view the api microservice
$ hasura microservice open api

# To view the app microservice
$ hasura microservice open app
```
Your application is now viewable to anyone with the link to your microservice.

>For more info on managing clusters and hosting your project refer to the [hasura documentation](https://docs.hasura.io/0.15/manual/cluster/index.html).


# Working of the application

This section shows how the wit.ai integration works.To see a working model visit this link
[app.bouquet44.hasura-app.io](https://app.bouquet44.hasura-app.io/).

You can also visit your own project's `app` microservice as it has the same application by default.

```bash
$ hasura microservice open app
```

You'll see this page.

![app_home](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/app_1.png)

Enter some text in the input box to get the following data :

* `Intent` - The intent of your text, this could be any of the following
	* **greeting** - If you enter text like 'Hi' or 'Hello'.
	* **get_news** - Fetch news about the search term.
	* **get_twitter_feed** - Fetch tweets related to the search term.
	* **get_weather** - Fetch info about the weather.
	* **exit** - If you enter text like 'Bye'.
* `Search term` - The key word for fetching information , this could be on of the following
	* **Location** - Such as Mumbai, Delhi, Sydney etc.
	* **Query** - Dhoni, Terror attacks, Olympics, Microsoft.
* `Date` - Could be *next sunday*, *tomorrow*, *today* ,*september 12th* etc.
* `Time` - 5pm , 6am etc.

# Working examples:

## Greeting
![greeting](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/gifs/greeting.gif)

## Get weather
![get_weather](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/gifs/weather.gif)

## Get tweets
![get_tweets](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/gifs/twitter.gif)

## Exit
![exit](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/gifs/exit.gif)

## Error
If the bot can't understand your text

![error](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/gifs/error.gif)

>This application finds intent for a **chat bot to fetch news** however , you can modify it for your own needs.

# Using your own Wit API

In case of your project you may want to link your frontend to a custom Wit API , the following README details instructions on how to link custom api and also testing them - [wit_integration/Readme.md](https://github.com/AkshayRaman97/wit_integration/blob/master/README.md)

# Contributors

* **Akshay Raman** - [Github profile](https://github.com/AkshayRaman97)