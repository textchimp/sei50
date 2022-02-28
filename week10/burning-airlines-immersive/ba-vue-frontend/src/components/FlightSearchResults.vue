<template>
  <div>
    <h2>Search Results</h2>
    {{ $route.params.origin }}
    {{ $route.params.destination }}
  </div>
</template>

<script>
export default {
  name: 'FlightSearchResults'
}
</script>

<style scoped>
</style>
