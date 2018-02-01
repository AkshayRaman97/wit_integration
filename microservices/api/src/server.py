from src import app
from wit import Wit
from flask import render_template,request,jsonify,redirect
import requests
import json

URL = "https://api.wit.ai/samples"
AUTH = "OTRUHWG5AMWZMYJC2C6XL2N73M2NU252"
client = Wit(AUTH)
intents = ['Greeting','Question','Command','Statement','Recommendation']

@app.route("/")
def home():
    return render_template('Readme.html')

@app.route("/intent",methods = ['POST'])
def get_intent():
    try:
        text = request.json['text']
        try:
            response = client.message(text)
            return(jsonify({"response":response['entities']['intent'][0]['value']}))
        except KeyError:
            return(jsonify({"response":"Couldn't find one"}))
        else:
            return jsonify({"response":"Some error occured"})
    except KeyError:
        return jsonify({"response":"Invalid input"})
    else:
        return jsonify({"response":"Some error occured"})
