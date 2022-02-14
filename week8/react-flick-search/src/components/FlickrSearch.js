
import React from 'react';
import '../App.css';

import SearchForm from './SearchForm';

class FlickrSearch extends React.Component {


  performSearch = (query) => {
    console.log('FlickrSearch::performSearch()', query);
  };


  render(){

    return (
      <div className="App">
        <h1>Flickr Search</h1>
        <hr/>

        <SearchForm onSearch={ this.performSearch } />

      </div>
    );

  } // render()

} // class FlickrSearch

export default FlickrSearch;
