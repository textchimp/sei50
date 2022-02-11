
import React from 'react';

class Clickr extends React.Component {

  state = {
    clickCounter: 0
  };

  // This method, because it's defined as an arrow function,
  // will NOT forget the value of 'this' when we use it as
  // an event handler
  handleClick = () => {

    const newCounterValue = this.state.clickCounter + 1;

    this.setState({ clickCounter: newCounterValue })
    console.log('clicked!', newCounterValue); // BEWARE! setState is ASYNCHRONOUS! You can't rely on the value being updated within the same code block/event handler

    // Run the method in the parent called reportClickCount,
    // which was passed to this child as a prop called
    // 'phoneHome'
    this.props.phoneHome( this.state );

  };

  render(){

    return (
      <div>
        <p>
          Click count: { this.state.clickCounter }
        </p>
        <button onClick={ this.handleClick }>MAYBE ERASE HISTORY?</button>
      </div>
    );

  } // render()

} // class Clickr

export default Clickr;
