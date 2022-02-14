
import React from 'react';
import '../App.css';

import axios from 'axios';

import SearchForm from './SearchForm';
import ThumbnailGallery from './ThumbnailGallery';

// TODO: import from some single file of global constants
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';


class FlickrSearch extends React.Component {

  state = {
    resultPhotos: [],
    loading: false,  // controls whether or not to show loading message
    error: null  // whether or not to show an error message
  }


  performSearch = async (query) => {
    console.log('FlickrSearch::performSearch()', query);

    // If we don't do this, we never see the loading message
    this.setState({ loading: true });

    // When you refactor to use unique Route components,
    // you will need to use componentDidMount() in your
    // FlickrSearchResults component - similar to the
    // Creepy Dentist <ProcedureSearchResults> component

    // componentDidUpdate() -- look into this and the args it gives you
    // to work out how to do a new search from a search results route
    // (assuming the search form is visible on every route)
    // BEWARE OF INFINITE LOOPS - turn off the axios.get() and
    // do a console.log instead while testing this!!!

    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: FLICKR_API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: query // should come from user input
    };

    // axios.get( FLICKR_BASE_URL, { params: flickrParams } )
    //  .then( res => {
    //     console.log('response', res.data);
    //  })
    //  .catch( err => {
    //    console.log('Error in search AJAX: ', err);
    //  });

    try {
      const res = await axios.get( FLICKR_BASE_URL, {params: flickrParams} );
      console.log('response', res.data);
      this.setState({
        resultPhotos: res.data.photos.photo,
        loading: false  // stop showing loading message
      });
    } catch( err ){
       console.log('Error in search AJAX: ', err);
       this.setState({ error: err, loading: false });
    }


  }; // performSearch()


  render(){

    // Handle the special case where there is an error
    if( this.state.error !== null ){
      // early return; never reach the later 'return'
      return <p>Sorry, there was an error loading your results. Try again.</p>;
    }


    return (
      <div className="App">
        <h1>Flickr Search</h1>
        <hr/>

        <SearchForm onSearch={ this.performSearch } />

        <ThumbnailGallery
          loading={ this.state.loading }
          photos={ this.state.resultPhotos }
        />


      </div>
    );

  } // render()

} // class FlickrSearch

export default FlickrSearch;
