import React from 'react';
import './index.css';

class Wit extends React.Component {
  constructor(props){
    super(props)
    this.state = {text:""};
  }
  handleTextChange(e){
    this.setState({text:e.target.value})
  }
  changeOutput(e){
    e.preventDefault();
    var output;
    // console.log(JSON.stringify({text:this.state.text}));
    fetch('https://flask.bouquet44.hasura-app.io/get_intent', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({text:this.state.text})
  }).then(response => {
    response.json().then(function(data) {
      output = data.intent;
      return output;
     }).then((output) => {
       this.setState({intent:output});
     });
  }).catch(err => {
    console.error(err);
  });
}
showOutput() {
    if(this.state.intent){
      return(
        <div className="center outputbox">
          <b>Intent</b> {this.state.intent}
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
  render(){
    return(
      <div className="Wit">
        <form className="WitForm" onSubmit={this.changeOutput.bind(this)}>
          <input className="text-input center" type="text" value={this.state.text} onChange={this.handleTextChange.bind(this)}/>
          <br />
          <input className="button center" type="submit" value="Submit" />
        </form>
        {this.showOutput()}
      </div>
    );
  }
}

export default Wit;
