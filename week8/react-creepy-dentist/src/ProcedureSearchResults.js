import React from 'react';

class ProcedureSearchResults extends React.Component {

  // const {query} = this.props.match.params;

  render(){

    return (
      <div>
        <h3>Search results for: { this.props.match.params.query }</h3>
      </div>
    );

  } // render()

} // class ProcedureSearchResults

export default ProcedureSearchResults;
