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
    return render_template('help.html')

@app.route("/get_intent",methods = ['POST'])
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

@app.route("/train_wit",methods = ['GET','POST'])
def train_wit():
    if request.method == 'GET':
        return render_template("wit_trainer.html",intents=intents,message=None)
    if request.method == 'POST':
        try:
            content = request.form.get("train_text").strip().split("\r\n")
            intent = request.form.get("intents")
            request_list = []
            status = 500;
            for line in content:
                text,key_word = line.split(";")
                start = text.index(key_word)
                end = start+len(key_word)
                data = {"text": text,"entities": [{"entity": "intent","value": intent},{"entity": "key_word","start":start,"end":end,"value": key_word}]}
                request_list.append(data)
            headers={"Authorization":"Bearer "+AUTH,"Content-Type":"application/json"}
            response = requests.post(URL,json.dumps(request_list),headers=headers)
            status = response.status_code
            if(status!=200):
                raise Exception('Process failed')
            print(response.json())
            return render_template("wit_trainer.html",intents=intents,status=status,message=str(response.json()["n"]) + " submissions successful! Thanks for your contribution ")
        except:
            return render_template("wit_trainer.html",intents=intents,status=status,message="Submission failed ! something went wrong")
