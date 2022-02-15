
import React from 'react';

class SecretsForm extends React.Component {

  state = {
    secretContent: ''
  };

  handleInput = (ev) => {
    this.setState({ secretContent: ev.target.value })
  };


  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('submit:', this.state.secretContent);
    // we are ready to talk to the parent component... but how?
    this.props.onSubmit( this.state.secretContent );
  };


  render(){

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={ this.handleInput } />
          <button>Share</button>
        </form>
      </div>
    );

  } // render()

} // class SecretsForm

export default SecretsForm;
