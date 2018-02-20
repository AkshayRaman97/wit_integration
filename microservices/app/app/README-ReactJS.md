# **app** microservice

This microservice acts as the frontend for the **Wit.ai** - **Hasura** platform integration.

The entire details of this project can be found here - [wit_integration]()

# Table of Contents

- [**app** microservice](#-app--microservice)
- [Table of Contents](#table-of-contents)
- [Setting up the project](#setting-up-the-project)
- [Setting up your microservice](#setting-up-your-microservice)
- [Setting up your hasura cluster](#setting-up-your-hasura-cluster)
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

Follow this link to know about setting up this project - [wit_integration/Readme.md](https://github.com/AkshayRaman97/wit_integration/blob/master/README.md)

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

Follow this link to know about setting up a cluster for this project - [wit_integration/Readme.md](https://github.com/AkshayRaman97/wit_integration/blob/master/README.md)

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