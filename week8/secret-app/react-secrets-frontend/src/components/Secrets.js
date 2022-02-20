
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

    // Check to see if there are any new secrets
    window.setInterval( this.fetchSecrets, 1000 );


  } // componentDidMount()


  fetchSecrets = async () => {

    try {
      const res = await axios.get( RAILS_SECRETS_BASE_URL );
      console.log('secrets response:', res.data);
      this.setState({ secrets: res.data, loading: false });
    } catch( err ){
      console.log('ERROR loading AJAX secrets:', err );
      this.setState({ error: err });
    }

  } // fetchSecrets()


  postSecret = async (text) => {
    console.log('Secrets::postSecret():', text);

    try {
      const res = await axios.post( RAILS_SECRETS_BASE_URL, {content: text} );
      console.log('secret create response:', res.data);

      // NO! Not allowed to change state directly ('immutable')
      // this.state.secrets.push( res.data );

      // We have to make a copy, change the copy, and save it back into state
      // const newSecrets = this.state.secrets.slice();
      // newSecrets.push( res.data );
      // this.setState({ secrets: newSecrets })

      // We can also just use the 'spread' operator (...) inside the
      // square brackets of a new array, because it makes a copy
      this.setState({
        secrets: [ res.data, ...this.state.secrets ]
      })

    } catch( err ){
      console.log('Error creating secret:', err );
    }

  };  // postSecret()


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

        <ul className="secretsList">
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
