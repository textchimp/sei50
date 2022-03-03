<template>
  <div class="confirm">
    <h3>Your Seat Selection:</h3>
    <div class="seat">
      {{ row }}{{ col | seatColToLetter }}
    </div>
    <button @click="confirmSeat">Confirm</button>
  </div>
</template>

<script>
export default {
  name: 'ReservationConfirm',
  props: ['row', 'col'],
  methods: {
    confirmSeat(){
      console.log('seat confirm clicked!');
      // Let's tell the parent to make the booking for the selected seat
      // In Vue, we don't have to rely on a function being passed down
      // from parent to child as a prop -
      // instead, we just 'emit' an event
      this.$emit( 'seatConfirmed', 1, 2, 'a' );  // this is a made up name! We need to listen for exactly this named event in the parent
      // Note that you can send arguments to the parent handler! (These are just random example arguments)

    },
  }, // methods
  filters: {
    seatColToLetter( column ){
      return String.fromCharCode(64 + column);
    },
  },
}
</script>

<style lang="css" scoped>
  .seat {
    padding: 20px;
    font-weight: bold;
    color: green;
    font-size: 24px;
  }
</style>
