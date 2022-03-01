<template>
  <div>
    <h2>Search Flights</h2>

    <label>Origin:</label>
    <select v-model="origin">
      <option value="">Please select:</option>
      <option value="SYD">SYD</option>
      <option value="MEL">MEL</option>
      <option value="SIN">SIN</option>
      <option value="SFO">SFO</option>
    </select>

    &nbsp; &nbsp;

    <label>Destination:</label>
    <select v-model="destination">
      <option value="">Please select:</option>
      <option value="SYD">SYD</option>
      <option value="MEL">MEL</option>
      <option value="SIN">SIN</option>
      <option value="SFO">SFO</option>
    </select>

    &nbsp; &nbsp;

    <button @click="submitSearch">Search</button>

  </div>
</template>

<script>
export default {
  name: 'FlightSearch',
  data(){
    // This is our state object, as in React... but it's called 'data'.
    // HOWEVER we never refer to the 'data' key directly; in Vue you
    // access the state keys directly on the 'instance':
    //   this.origin, this.destination (NOT this.data.origin)
    return {
      origin: 'SYD',
      destination: 'MEL'
    };
  }, // data()
  methods: {
    submitSearch(){
      console.log('Submitted!');

      console.log('$router:', this.$router);
      // this.props.history.push(`/search/${this.origin}/${this.destination}`);
      this.$router.push({
        name: 'SearchResults', // from router index.js
        params: {
          // fill out the blanks in the URL by
          // using the key names from the router
          // index.js:
          //   /search/:origin/:destination
          origin: this.origin,
          destination: this.destination
        }
      });

    } // submitSearch()
  }, // methods
}
</script>

<style scoped>
</style>
