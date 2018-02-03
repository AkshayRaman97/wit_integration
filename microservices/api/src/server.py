from src import app
from wit import Wit
from flask import render_template,request,jsonify,redirect
import requests
import json

URL = "https://api.wit.ai/samples"
AUTH = "MZOHV54LAG5UEZYPE5JRESNPQMK6VBWB"
# AUTH = "OTRUHWG5AMWZMYJC2C6XL2N73M2NU252"

# Inititalizing wit client
client = Wit(AUTH)

@app.route("/")
def home():
    return render_template('Readme.html')

@app.route("/intent",methods = ['POST'])
def get_intent():
    output = {}
    try:
        text = request.json['text']
        try:
            response = client.message(text)
            output['intent'] = response['entities']['intent'][0]['value']
            output['search_term'] = (response['entities'].get('location') or response['entities'].get('local_search_query'))[0]['value']
            datetime = response['entities']['datetime'][0]['value'].split('.')[0].split('T')
            output['date'] = datetime[0]
            output['time'] = datetime[1]
            return(jsonify(output))
        except (KeyError,TypeError) as e:
            return(jsonify(output))
        else:
            return jsonify({"message":"Some error occured"})
    except KeyError:
        return jsonify({"message":"Invalid input"})
    else:
        return jsonify({"message":"Some error occured"})
