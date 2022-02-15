
import React from 'react';
import '../App.css';

import axios from 'axios';

const RAILS_SECRETS_BASE_URL = 'http://localhost:3000/secrets';

class Secrets extends React.Component {

  componentDidMount(){
    this.fetchSecrets();
  }


  async fetchSecrets(){

    try {
      const res = await axios.get( RAILS_SECRETS_BASE_URL );
      console.log('secrets response:', res.data);
    } catch( err ){
      console.log('ERROR loading AJAX secrets:', err );
    }

  } // fetchSecrets()


  render(){

    return (
      <div className="App">
        <h1>
          Spill Yer Guts
        </h1>
        <hr/>
        <h3>Terrible Secrets of the General Public</h3>

      </div>
    );

  } // render()

} // class Secrets

export default Secrets;
