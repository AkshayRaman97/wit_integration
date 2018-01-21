import React from 'react';
import './index.css';

class Wit extends React.Component {
  render(){
    return(
      <div class="Wit">
        <form class="WitForm">
          <input class="text-input center" type="text" />
          <br />
          <input class="button center" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Wit;
