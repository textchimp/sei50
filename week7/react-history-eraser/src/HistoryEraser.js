
import React from 'react';
import './App.css'

import Clickr from './Clickr';

class HistoryEraser extends React.Component {

  // The preferred way of creating state:
  // no constructor, declare instance variables
  // at the top level of the class itself:
  // ES6 "public class fields"
  state = {
    historyStillExists: true
  };


  reportClickCount = (count) => {
    console.log('in reportClickCount():', count);
    console.log('value of this:', this);
  }; // reportClickCount()

  render(){

    // console.log('state:', this.state);
    // let result;
    // if( this.state.historyStillExists === true ){
    //   result = <p>All is well!</p>;
    // } else {
    //   result = <p>You fool, you erased history!</p>
    // }

    return (
      <div className="App">
        <h1>
          History Eraser YOU FOOL!!!
        </h1>

        {
          this.state.historyStillExists
          ?
          <p>All is well, history still exists.</p>
          :
          <p>You fool, you erased history!</p>
        }

        <Clickr phoneHome={ this.reportClickCount } />

      </div>
    );

  } // render()

} // class HistoryEraser

export default HistoryEraser;
