
import React from 'react';
import './App.css'

import Clickr from './Clickr';

class HistoryEraser extends React.Component {

  // The preferred way of creating state:
  // no constructor, declare instance variables
  // at the top level of the class itself:
  // ES6 "public instance fields"
  state = {
    historyStillExists: true,
    todoList: [
      { text: 'First' },
      { text: 'Second' },
      { text: 'Third' },
    ]
  };

  // "Public instance methods" (using =)
  reportClickCount = (count) => {
    console.log('in reportClickCount():', count);
    console.log('value of this:', this);

    if( count > 4 ){
      this.setState({ historyStillExists: false });
    }

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
          // You can interpolate an array of JSX
          [
            <p>Item 1</p>,
            <p>Item 2</p>,
            <p>Item 3</p>
          ]
        }

        <ul>
        {
            // todoList: [
            //   { text: 'First' },
            //   { text: 'Second' },
            //   { text: 'Third' },
            // ]
          this.state.todoList.map( item => <li>{ item.text }</li> )
        }
        </ul>

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
