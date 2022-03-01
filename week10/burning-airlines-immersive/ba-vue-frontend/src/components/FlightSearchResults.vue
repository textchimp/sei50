<template>
  <div>
    <h2>Search Results from {{ origin }} to {{ destination }}</h2>

    <div v-if="loading" class="load">
      <p>Loading flight results....</p>
    </div>

    <div v-else>

      <div class="results" v-for="flight in flights">
        <div @click="gotoFlight(flight.id)">
          <!-- fix the hideous format of these dates!!! npm luxon -->
          {{ flight.departure_date }}:
          {{ flight.flight_number }}
          -
          {{ flight.airplane.name  }}
        </div>
      </div><!-- v-for loop closing div tag -->

    </div><!-- v-else (loading == false) div closing tag -->


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
      this.flights = res.data;  // save AJAX response into Vue state
      this.loading = false;
      console.log('response', res.data);
    } catch( err ){
      console.log('Error loading flight search results', err);
      this.error = error;
    }

  }, // mounted()

  methods: {
    gotoFlight(id){
      console.log('gotoFlight()', id);
      this.$router.push({
        name: 'FlightDetails',
        params: { id: id }
      });
    }, // gotoFlight()
  }, // methods

}; // export default object
</script>

<style scoped>
  .results div {
    cursor: pointer;
  }
  .results div:hover{
    text-decoration: underline;
    font-weight: bold;
  }
</style>
