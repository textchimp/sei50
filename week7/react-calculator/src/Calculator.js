import React from 'react';
import './App.css'

class Calculator extends React.Component {

  // Like 'initialize' in Ruby classes
  // we need a constructor so we can initiliase the state object
  // for this component
  constructor(props){

    super(props); // run the constructor function of the parent class React.Component

    // State is just an instance variable in React, always an object;
    // (in Vue this was called 'data')
    this.state = {
      firstNum: 0,   // default values
      secondNum: 0
    };

  } // constructor()


  updateFirstNum( ev ){
    console.log('in updateFirstNum():', ev.target.value);
  }


  render(){

    return (
      <div className="App">
        <h1>
          CalculatoReact!
        </h1>

        <input type="text" placeholder="First number" onChange={ this.updateFirstNum } />

        <input type="text" placeholder="Second number" />

        <br/>

        <p>firstNum: { this.state.firstNum }</p>
        <p>secondNum: { this.state.secondNum }</p>

      </div>
    );

  } // render()

} // class Calculator

export default Calculator;
