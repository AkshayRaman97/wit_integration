#Importing packages
from src import app
from wit import Wit
from flask import render_template,request,jsonify,redirect
import requests
import json


# Wit
AUTH = "MZOHV54LAG5UEZYPE5JRESNPQMK6VBWB"
client = Wit(AUTH) # Wit client

# Readme
@app.route("/")
def home():
    return render_template('Readme.html')

# POST endpoint to get intent
@app.route("/intent",methods = ['GET','POST'])
def get_intent():
    if request.method=='GET':
        return redirect('/')
    if request.method=='POST':
        output = {}
        try:
            text = request.json['text']
            try:
                response = client.message(text)
                if response['entities'].get('intent'):
                    output['intent'] = response['entities']['intent'][0]['value']
                if response['entities'].get('location'):
                    output['location'] = response['entities']['location'][0]['value']
                if response['entities'].get('local_search_query'):
                    output['search_term'] = response['entities'].get('local_search_query')[0]['value']
                if response['entities'].get('datetime'):
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


# Test endpoint
AUTH_test = "SM2E73JNLMSR2UYOJO2TEGY7DQGX5OXW" # Paste the auhtentication code from Wit app
client_test = Wit(AUTH_test)

@app.route('/test',methods=["POST"])
def test():
    try:
        # Getting the text from body of the request
        text = request.json['text']
        # Sending text to Wit client
        response = client_test.message(text)
        # Returning the response
        return(jsonify(response))
    except KeyError:
        return(jsonify({"message":"Invalid request"}))
    else:
        return(jsonify({"message":"Some error occured"}))
