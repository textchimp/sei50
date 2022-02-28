<template>
  <div>
    <h2>Search Results from {{ origin }} to {{ destination }}</h2>

    <div v-if="loading" class="load">
      <p>Loading flight results....</p>
    </div>

    <div v-else>

      <div v-for="flight in flights">
        <p>{{ flight.flight_number }}</p>
      </div><!-- v-for loop closing div tag -->

    </div>


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
      flights: [],
      loading: true,
      error: null
    };
  }, // data()

  // This is like React's componentDidMount() - runs once when the component
  // is added to the DOM
  async mounted(){
    console.log('Component mounted', this.origin, this.destination);

    try {
      const url = `${API_BASE_URL}flights/search/${this.origin}/${this.destination}`;
      const res = await axios.get(url);
      this.flights = res.data;
      this.loading = false;
      console.log('response', res.data);
    } catch( err ){
      console.log('Error loading flight search results', err);
      this.error = error;
    }

  }, // mounted()

  methods: {
  }, // methods

}; // export default object
</script>

<style scoped>
</style>
