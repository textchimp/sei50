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

    // Make sure our event handler method remembers the correct value of 'this'
    // so we can run 'this.setState()' in it
    this.updateFirstNum = this.updateFirstNum.bind( this );
    this.updateSecondNum = this.updateSecondNum.bind( this );

  } // constructor()


  updateFirstNum( ev ){
    console.log('in updateFirstNum():', ev.target.value);
    // HERE IS WHAT YOU ARE NOT ALLOWED TO DO:
    // this.state.firstNum = ev.target.value;
    // NO! FORBIDDEN! NO DIRECT STATE CHANGE!

    this.setState({ firstNum: parseInt(ev.target.value) })


  } // updateFirstNum()

  updateSecondNum( ev ){
    this.setState({ secondNum: parseInt(ev.target.value) })
  } // updateSecondNum()


  render(){

    // const firstNum = this.state.firstNum;
    // const secondNum = this.state.secondNum;
    const { firstNum, secondNum } = this.state;

    return (
      <div className="App">
        <h1>
          CalculatoReact!
        </h1>

        <input type="text" placeholder="First number" onChange={ this.updateFirstNum } />

        <input type="text" placeholder="Second number" onChange={ this.updateSecondNum }/>

        <br/>

        <p>{firstNum} + {secondNum} = { firstNum + secondNum }</p>
        <p>{firstNum} - {secondNum} = { firstNum - secondNum }</p>
        <p>{firstNum} / {secondNum} = { firstNum / secondNum }</p>
        <p>{firstNum} * {secondNum} = { firstNum * secondNum }</p>

      </div>
    );

  } // render()

} // class Calculator

export default Calculator;
