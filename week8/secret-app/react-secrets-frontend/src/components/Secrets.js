
import React from 'react';
import '../App.css';

import axios from 'axios';

import SecretsForm from './SecretsForm'

const RAILS_SECRETS_BASE_URL = 'http://localhost:3000/secrets';

class Secrets extends React.Component {

  state = {
    secrets: [],
    loading: true,
    error: null
  };

  componentDidMount(){
    this.fetchSecrets(); // as soon as the app loads, fetch the secrets to show
  }


  async fetchSecrets(){

    try {
      const res = await axios.get( RAILS_SECRETS_BASE_URL );
      console.log('secrets response:', res.data);
      this.setState({ secrets: res.data, loading: false });
    } catch( err ){
      console.log('ERROR loading AJAX secrets:', err );
      this.setState({ error: err });
    }

  } // fetchSecrets()


  postSecret = (text) => {
    console.log('Secrets::postSecret():', text);
  };


  render(){

    const { loading, error, secrets } = this.state;

    if( error ){
      return <p>Error loading secrets. Try again later.</p>;
    }


    return (
      <div className="App">
        <h1>
          Spill Yer Guts
        </h1>

        <SecretsForm  onSubmit={ this.postSecret } />

        <hr/>
        <h3>Terrible Secrets of the General Public</h3>

        <ul class="secretsList">
        {
          loading
          ?
          <p>Loading secrets...</p>
          :
          secrets.map( s => <li key={ s.id }>{ s.content }</li> )
        }
        </ul>

      </div>
    );

  } // render()

} // class Secrets

export default Secrets;
