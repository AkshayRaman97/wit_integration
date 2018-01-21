from src import app
from flask import render_template,request
from flask import jsonify,redirect
import requests
import json
from wit import Wit

URL = "https://api.wit.ai/samples"
AUTH = "UBNZIAOJ75A35H5SRC3MQUON7VX2EDXM"
client = Wit(AUTH)
intents = ['Greeting','Question','Command','Statement']

@app.route("/")
def home():
    return render_template('help.html')

@app.route("/get_intent",methods = ['POST'])
def get_intent():
    text = request.form.get("text").strip()
    response = client.message(text)
    print(response.json())
    return "LOL"

@app.route("/train_wit",methods = ['GET'])
def train_wit():
    return render_template("wit_trainer.html",intents=intents,message=None)

@app.route("/post_to_wit",methods=['POST'])
def post_to_wit():
    content = request.form.get("train_text").strip().split("\r\n")
    intent = request.form.get("intents")
    request_list = []
    for line in content:
        data = {"text": line,"entities": [{"entity": "intent","value": intent}]}
        request_list.append(data)
    # print(json.dumps(request_list))
    headers={"Authorization":"Bearer "+AUTH,"Content-Type":"application/json"}
    response = requests.post(URL,json.dumps(request_list),headers=headers)
    status = response.status_code
    if(status==200):
        print(response.json())
        return render_template("wit_trainer.html",intents=intents,status=status,message=str(response.json()["n"]) + " submissions successful! Thanks for your contribution ")
    return render_template("wit_trainer.html",intents=intents,status=status,message="Submission failed ! something went wrong")
