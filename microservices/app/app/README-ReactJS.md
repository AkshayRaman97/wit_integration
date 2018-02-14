# Hasura - Wit.ai Integration

**Wit.ai** is a natural language processing tool which allows developers to create applications that can interact with users through text or speech. It is completely open source and free to use, visit the [website](https://wit.ai/) to know more.

# Table of Contents

- [Hasura - Wit.ai Integration](#hasura---witai-integration)
- [Table of Contents](#table-of-contents)
- [Setting up the project](#setting-up-the-project)
  * [Cloning the project](#cloning-the-project)
  * [Files and Directories](#files-and-directories)
    + [Project structure](#project-structure)
    + [`/microservices`](#--microservices-)
    + [`/microservices/api`](#--microservices-api-)
    + [`/microservices/app`](#--microservices-app-)
- [Setting up your development environment](#setting-up-your-development-environment)
  * [For Python devs (`api` microservice)](#for-python-devs---api--microservice-)
  * [For React devs (`app` microservice)](#for-react-devs---app--microservice-)
- [Setting up your hasura cluster](#setting-up-your-hasura-cluster)
  * [Install `hasura-cli`.](#install--hasura-cli-)
  * [Login to hasura](#login-to-hasura)
  * [Create a cluster](#create-a-cluster)
  * [Add cluster to your project](#add-cluster-to-your-project)
  * [Pushing your code to the cluster](#pushing-your-code-to-the-cluster)
- [Working of the application](#working-of-the-application)
- [Working examples](#working-examples)
  * [Greeting](#greeting)
  * [Get weather](#get-weather)
  * [Get tweets](#get-tweets)
  * [Exit](#exit)
  * [Error](#error)
- [Using your own Wit API](#using-your-own-wit-api)
  * [Create Wit.ai application](#create-witai-application)
  * [Linking to your custom api.](#linking-to-your-custom-api)
  * [Testing your API](#testing-your-api)
- [Author](#author)

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

### `/microservices/api`

Folder structure:

![api_dir](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/api_dir.png)

This is the backend of the integration. Written in `python3.6` and uses the `Flask` framework.
Edit the `app.py` file to add endpoints to your application.

References:

* [Flask documentation](http://flask.pocoo.org/docs/0.12/).
* [hasura/hello-python-flask](https://github.com/hasura/hello-python-flask) (the base project for this microservice).
* [api microservice](https://github.com/AkshayRaman97/wit_integration/blob/master/microservices/api/README.md).



### `/microservices/app`

Folder structure :

![app_dir](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/app_dir.png)

The frontend of the project. Uses the `react-js` javascript framework. Edit the `App.js` file to get started.

References:

* [React documentation](https://reactjs.org/docs/hello-world.html).
* [hasura/hello-react](https://github.com/hasura/hello-react).

# Setting up your development environment

There would be two kinds of devs working in this project , the `python-flask` and the `react-js` developers. Jump to the respective sections to know how to setup the environment.


## For Python devs (`api` microservice)

First we need `pip` for installing necessary packages.

To install `pip` refer to this link - [Pip](https://pip.pypa.io/en/stable/installing/)

For any development activity it is best to use a **virtual environment**. It helps us manage our packages in a very efficient way. To use a virtual environment first install `virtualenvwrapper`.

```bash
# Install virtualenvwrapper
pip install virtualenvwrapper

## Create a virtual environment
$ mkvirtualenv my_env --python=python3.6

## Activate your environment
$ workon env_wit

## Deactivate your environment
(my_env)$ deactivate
```

>The **(my_env)** indicates that you are currently working inside your virtual environment.
If everything is working correctly follow the below code to setup your packages.


Installing the packages and running the application.

```bash
# Navigate to project folder
$ cd /home/user/projects/wit_integration

# Navigate to api folder
$ cd microservices/api

# Activate your virtual environment
$ workon my_env

# Install necessary packages
$ pip install -r src/requirements.txt

# Run your app
$ export CLUSTER_NAME=[your-hasura-cluster-name]
$ gunicorn --reload --bind "0.0.0.0:8080" src:app
```

The app is running at [http://localhost:8080](http://localhost:8080). It runs on `port 8080` by default. In case it fails to run change to a different port and run again.

Edit the `server.py` file to create endpoints for your application.

## For React devs (`app` microservice)

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

In order to modify the api to understand sentences suitable for your application follow this section.

## Create Wit.ai application

Visit the **Wit.ai** homepage.

Login to use the dashboard.

The dashboard should appear something like this.

![wit_home](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/wit_home.png)

Click on the **+** icon to create a new app.

![plus](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/plus.png)

Enter the details and click **Create App**.

![create_app](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/create_app.png)

Click on your app's name on the dashboard , you would see a page like this.

![test_app](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/test_app.png)

You can train your app to find intents and key words. Read the [Wit documentation](https://wit.ai/docs) to know more about training your app.

## Linking to your custom api.

Go to the settings of your wit application.

![app_settings](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/app_settings.png)

Copy the `Server Access Token`.

![access_token](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/access_token.png)

In your `server.py` create an endpoint.

```python
# server.py
# Importing packages
from src import app
from wit import Wit
import jsonify
import requests

# Authentication code
AUTH = "SM2E73JNLMSR2UYOJO2TEGY7DQGX5OXW" # Paste the code from Wit app
# Inititalizing Wit client
client = Wit(AUTH)

# Creating a GET endpoint
@app.route('/test',methods="POST")
def test():
	try:
    	# Getting the text from body of the request
		text = request.json["text"]
        # Sending text to Wit client
        response = client.message(text)
        # Returning the response
        return response
    except KeyError:
    	return(jsonify({"message":"Invalid request"}))
    else:
    	return(jsonify({"message":"Some error occured"}))
```

## Testing your API

There are many API testing tools available , one of the popular ones is **Postman** .

Install Postman from here - [Postman](https://www.getpostman.com/).

Open the Postman application and setup an account.The home page should be like this.

![postman_home](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/postman_home.png)

Create a new collection.

![create_collection](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/create_collection.png)

Add a new POST request.

![add_request](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/add_request.png)

Add body of the request.

![body_request](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/body_request.png)

See the response.

![response_request](https://raw.githubusercontent.com/AkshayRaman97/wit_integration/master/assets/images/response_request.png)

# Author

* **Akshay Raman** - _Team 19_ - [Github profile](https://github.com/AkshayRaman97)


Hope your application is working as expected. If you run into any issues Google and StackOverflow are always there to help !

Have fun developing new apps !