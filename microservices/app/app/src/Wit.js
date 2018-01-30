import React from 'react';
import './index.css';

class Wit extends React.Component {
  constructor(props){
    super(props)
    this.state = {text:"",intent:null};
  }
  handleTextChange(e){
    this.setState({text:e.target.value})
  }
  changeOutput(e){
    e.preventDefault();
    this.setState({intent:null})
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
         this.setState({intent:output});
       });
    }).catch(err => {
      console.error(err);
    });
  }
}
showOutput() {
    if(this.state.intent){
      return(
        <div className="center outputbox">
          <b className="bold"> &nbsp;&nbsp; Intent &nbsp;&nbsp;</b> &nbsp;&nbsp;{this.state.intent}
        </div>
      );
    }
    else{
      return(
        <div>
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
          <input className="button center" type="submit" value="Submit" />
        </form>
        {this.showOutput()}
      </div>
    );
  }
}

export default Wit;
