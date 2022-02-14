
// import React from 'react';

import ProcedureSearchForm from './ProcedureSearchForm';

const Procedures = (props) => {

  console.log('props from router:', props);

  return (
    <div>
      <h2>Procedures</h2>
      <p>
        Learn more about our extensive range of dental procedures here!
      </p>
      <p>
        Why not start with a <strong>Root Canal</strong>?
      </p>

      {
        // BECAUSE ProcedureSearchForm is NOT rendered by a <Route> tag directly in App.js,
        // it does NOT get access to router props like 'history' (and we need to do a history.push()
        // to submit our search to the ProcedureSearchResults route).
        // However, its parent component Procedures IS rendered by a <Route> tag, so it DOES have those
        // router props; to give them to the child, we just forward them on as a new prop.
        // Now ProcedureSearchForm can use code like 'this.props.history.push()'
      }
      <ProcedureSearchForm  history={ props.history } />

    </div>
  );

}; // Procedures()

export default Procedures;
