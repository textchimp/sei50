<template>
  <div>

    <div v-if="loading">
      <p>Loading flight details...</p>
    </div>

    <div v-else>
      <h2>Flight {{ flight.flight_number }}</h2>

      <div class="departure_date">
        <strong>Departure Date:</strong>
        {{ flight.departure_date }}
      </div>

      <div class="origin">
        <strong>Origin:</strong>
        {{ flight.origin }}
      </div>

      <div class="destination">
        <strong>Destination:</strong>
        {{ flight.destination }}
      </div>

      <div class="airplane">
        <strong>Aircraft:</strong>
        {{ flight.airplane.name }}
      </div>


      <div class="seating">

        <div class="planeRow" v-for="row in flight.airplane.rows">

          {{ row }}

          <div
           class="planeSeat"
           :class="getSeatStatus(row, col)"
           v-for="col in flight.airplane.cols"
          >
            {{ col | seatColToLetter }}
          </div>

          {{ row }}

        </div><!-- rows v-for loop -->

      </div>


    </div><!-- end of v-else for showing details -->



  </div>
</template>

<script>

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

export default {
  name: 'FlightDetails',
  props: ['id'],
  data(){
    return {
      flight: {}, // AJAX response data saved here
      loading: true,
      error: null,
    }
  },

  filters: {

    seatColToLetter( column ){
      return String.fromCharCode(64 + column);
    },

  },

  methods: {
    getSeatStatus( row, col ){
      // return Math.random() > 0.5 ? 'occupied' : 'booked';

      for( const res of this.flight.reservations ){
        if( res.row === row && res.col === col ){
          return 'occupied';
        }
      } // for each reservation

      return ''; // not occupied

    },
  },

  async mounted(){
    console.log('FlightDetails mounted, ID =', this.id);

    try {
      const url = `${API_BASE_URL}flights/${ this.id }`;
      const res = await axios.get(url);
      console.log('flight', res.data);
      this.flight = res.data;
      this.loading = false;
    } catch( err ){
      console.log('Error loading Flight details', err);
      this.error = err;
    }

  }, // mounted()

} // export default {}
</script>

<style lang="css" scoped>

  .seating {
    margin-top: 50px;
  }

  .planeSeat {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #CCCCCC;
    line-height: 40px;
    border-radius: 20% 20% 0 0;
    margin: 4px;
  }

  .occupied {
    background-color: grey;
  }

  .booked {
    background-color: orange;
  }

</style>
