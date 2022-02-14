import React from 'react';


class ProcedureSearchForm extends React.Component {

  state = {
    queryText: ''
  };


  handleInput = (ev) => {
    console.log('handleInput()', ev.target.value);
    this.setState({ queryText: ev.target.value })
  }; // handleInput()


  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('handleSubmit()');

    // How do i navigate to a new Router route from JS?
    this.props.history.push(`/procedures/search/${ this.state.queryText }`);

  }; // handleSubmit()


  render(){

    return (
      <div>
        <h4>Search for a Procedure: { this.state.queryText } </h4>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={ this.handleInput } />
          <button>Search</button>
        </form>
      </div>
    );

  } // render()

} // class ProcedureSearchForm

export default ProcedureSearchForm;
