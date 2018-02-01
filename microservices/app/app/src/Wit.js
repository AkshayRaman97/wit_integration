import React from 'react'
import './index.css'

class Wit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text:"",
      intent:null,
      status:"inactive"
    };
  }
  handleTextChange(e){
    this.setState(
      {
        text:e.target.value,
      }
    );
  }
  changeOutput(e){
    e.preventDefault();
    setTimeout(() => {this.outputBox.className="outputContainer center inactive";},1000);
    var output;
    if(this.state.text.length){
      fetch('https://api.bouquet44.hasura-app.io/intent', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text:this.state.text})
    }).then(response => {
      response.json().then(function(data) {
        output = data.response;
        return output;
       }).then((output) => {
         this.setState({
           intent:output,
         });
         this.outputBox.className="outputContainer center active";
       });
    }).catch(err => {
      console.error(err);
    });
  }
}
  showOutput() {
      if(this.state.intent && "Couldn't find one" === this.state.intent){
        return(
          <div className="outputbox center alert">
            Couldn't find intent!
          </div>
        );
      }
      else if(!this.state.intent){
          return(
            <div className="outputbox center">
            </div>
          )
      }
      else{
        return(
          <div className="outputbox center">
              <b className="bold"> &nbsp;&nbsp; Intent &nbsp;&nbsp;</b> &nbsp;&nbsp;{this.state.intent}
          </div>
          );
      }
  }
  showPlaceholder(){
    var text_list = ["Hello","Have a good day","What is this?","How does wit work?","You must do your duty","Maybe there's a better way"];
    return text_list[Math.floor(Math.random() * Math.floor(text_list.length))];
  }
  render(){
    return(
      <div className="Wit">
        <form className="WitForm" onSubmit={this.changeOutput.bind(this)}>
          <input className="text-input center" placeholder={this.showPlaceholder()} type="text" value={this.state.text} onChange={this.handleTextChange.bind(this)}/>
          <br />
          <div className="button-container center">
            <input className="button center" type="submit" value="Get intent" />
          </div>
        </form>
        <div className="outputContainer center" ref={(output) => { this.outputBox = output; }}>
          {this.showOutput()}
        </div>
      </div>
    );
  }
}

export default Wit;
