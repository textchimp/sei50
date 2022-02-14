import React from 'react';

class ProcedureSearchResults extends React.Component {


  render(){

    // const query = this.props.match.params.query;
    // const id = this.props.match.params.id;
    // const {params} = this.props.match;
    // const {query} = this.props.match.params;


    return (
      <div>
        <h3>Search results for: { this.props.match.params.query }</h3>
      </div>
    );

  } // render()

} // class ProcedureSearchResults

export default ProcedureSearchResults;
