# `api`

Python-Flask microservice backend for the wit_integration.

## About the api

The microservice is written in `python3.6` and uses `Flask` framework.
The endpoints of this app are

    ('/')       --> Displays the Readme of the microservice.
    ('/intent') --> An endpoint which accepts a POST request containing the message
                    and returns a JSON response containing the intent of the text.
    ('/test')   --> A test endpoint used for demonstrating usage of Wit client

### `/intent`

Accepts POST request containing the message in the body.
Link to this endpoint is here [/intent](https://api.bouquet44.hasura-app.io/intent).

##### methods

* Accepts only POST requests.
* A GET request would fail at this endpoint.

##### headers

The request to this endpoint must have the following headers.

*   **Accept**: application/json
*   **Content-Type** : application/json

Both headers indicate that the Body of the request is of `JSON format`.

##### body

* A javascript object which has a key `text` and a value for it.

```json
  {
    "text" : "Hello !"
  }
```

##### response

The response is a JSON object with the following data

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

##### example

A request with *Hello* as the text.

```bash
	curl -XPOST
    -H 'Accept: application/json'
    -H "Content-type: application/json"
    -d '{
      		"text" : "Will it rain today at 5pm in Bangkok"
		}'
    'api.bouquet44.hasura-app.io/intent'
```
Returns the following

```json
    {
        "date": "2018-02-07",
        "intent": "get_weather",
        "location": "Bangkok",
        "time": "17:00:00"
    }
```

## Extras

For further notes about things such as local and remote deployment of microservice please refer to the hasura boilerplate repository.

Link to repository -[hello-python-flask](https://github.com/hasura/hello-python-flask/blob/master/README.md)
