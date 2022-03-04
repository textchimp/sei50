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

      <reservation-confirm
       v-if="selectedSeat.row && selectedSeat.col"
       :row="selectedSeat.row"
       :col="selectedSeat.col"
       @seat-confirmed="handleSeatConfirmed"
      />

      <div class="seating">

        <div
         v-for="row in flight.airplane.rows"
         class="planeRow"
         :key="row"
        >

          {{ row }}

          <div
           v-for="col in flight.airplane.cols"
           class="planeSeat"
           :key="col"
           :class="getSeatStatus(row, col)"
           @click="selectSeat(row, col)"
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

import ReservationConfirm from './ReservationConfirm';

// Fake a logged-in user ID
const FAKE_USER_ID = 16; // Use your own user ID from reservation state!

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

export default {
  name: 'FlightDetails',
  props: ['id'],
  components: { ReservationConfirm }, // ReservationConfirm: ReservationConfirm
  data(){
    return {
      flight: {}, // AJAX response data saved here
      loading: true,
      error: null,
      selectedSeat: {
        row: null,
        col: null
      }
    }
  }, // data()

  filters: {
    seatColToLetter( column ){
      return String.fromCharCode(64 + column);
    },

  }, // filters

  methods: {

    async handleSeatConfirmed(id, ...allArgs){
      // This is the handler for the 'seatConfirmed' event from the
      // ReservationConfirm child component; it gets whatever extra
      // arguments are passed from the child's 'this.$emit()' call, i.e.:
      //    this.$emit( 'seatConfirmed', 1, 2, 'a' );
      console.log('handleSeatConfirmed()', id, allArgs);

      // do an axios.post() to Rails backend,
      // write the controller action to add a reservation -
      // probably check that there isn't already a booking for
      // that row:col - use a validation?
      try {
        const url = `${API_BASE_URL}reservations`;
        const res = await axios.post(url, {
          flight_id: this.id,
          row: this.selectedSeat.row,
          col: this.selectedSeat.col
        });
        console.log('reservation response:', res.data);
      } catch( err ){
        console.log('Error creating reservation:', err);
        this.error = err;
      }


    }, // handleSeatConfirmed()


    selectSeat(row, col){
      console.log('selected seat:', row, col);

      this.selectedSeat = { row, col }; // save the selection into state

      // Either: Do a real BA shortcut and fire off an AJAX
      // POST request immediately to the Rails backend to
      // book this seat,
      // OR, PREFERRABLY,
      // save the selected row & col into state, show a confirmation
      // box above the seating diagram with a 'Confirm' button to
      // give the user a chance to change their selection before
      // submitting the booking
      // And, IDEALLY - do this confirmation UI in a child component!
      // How does the child component talk back to the parent?

    },

    getSeatStatus( row, col ){
      // return Math.random() > 0.5 ? 'occupied' : 'booked';

      if( this.selectedSeat.row === row && this.selectedSeat.col === col ){
        return 'selected'; // becomes the class of this seat
      }


      for( const res of this.flight.reservations ){
        if( res.row === row && res.col === col ){

          if( res.user_id === FAKE_USER_ID ){
            return 'booked';
          } else {
            return 'occupied';
          }


        } // seat match
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
    cursor: pointer;
  }

  .planeSeat:hover {
    background: #EEEEEE;
    border: 1px solid black;
  }

  .occupied {
    background-color: grey;
    pointer-events: none;
  }

  .booked {
    background-color: orange;
    pointer-events: none;
  }

  .selected {
    background-color: green !important;
    color: white;
  }

</style>
