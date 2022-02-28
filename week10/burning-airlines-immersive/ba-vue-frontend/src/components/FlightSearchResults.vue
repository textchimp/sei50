<template>
  <div>
    <h2>Search Results</h2>
    {{ origin }}
    {{ destination }}
  </div>
</template>

<script>

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

export default {
  name: 'FlightSearchResults',
  props: ['origin', 'destination'],
  data(){
    return {
      // state goes here
    };
  }, // data()

  // This is like React's componentDidMount() - runs once when the component
  // is added to the DOM
  async mounted(){
    console.log('Component mounted', this.origin, this.destination);

    try {
      const url = `${API_BASE_URL}flights/search/${this.origin}/${this.destination}`;
      const res = await axios.get(url);
    } catch( err ){
      console.log('Error loading flight search results', err);
    }

  }, // mounted()

  methods: {
  }, // methods

}; // export default object
</script>

<style scoped>
</style>
