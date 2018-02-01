# `api`

Python-Flask microservice backend for the wit_integration.

## About the api

The microservice is written in `python3.6` and uses `Flask` framework.
The endpoints of this app are

    ('/')       --> Displays the Readme of the microservice.
    ('/intent') --> An endpoint which accepts a POST request containing the message
                    and returns a JSON response containing the intent of the text.

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

##### response

* A javascript object with `response` as the key along with the classified intent as the value.

##### example

A request with *Hello* as the text.

	curl -XPOST
    -H 'Accept: application/json'
    -H "Content-type: application/json"
    -d '{
      		"text" : "Hello !"
		}'
    'api.bouquet44.hasura-app.io/intent'

Returns the following

	{
    	"response" : "Greeting"
    }


## Extras

For further notes about things such as local and remote deployment of microservice please refer to the hasura boilerplate repository. A detailed description of the above can be found here.

[hello-python-flask](https://github.com/hasura/hello-python-flask/blob/master/README.md)
