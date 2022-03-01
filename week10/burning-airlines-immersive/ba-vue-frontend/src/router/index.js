import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlightSearch from '@/components/FlightSearch'
import FlightSearchResults from '@/components/FlightSearchResults'
import FlightDetails from '@/components/FlightDetails'

// if( process.env )
// console.log(process.env);

// Do NOT use the real router if we are in
// testing mode! (because we need to be
// able to 'mock' or fake the $router
// for testing). (Karma sets this environment
// variable to 'testing'; when using the
// dev server and the browser it will
// be 'development')
// console.log(process.env);
if( process.env.NODE_ENV !== 'testing' ){
  Vue.use(Router)
}

export default new Router({
  routes: [
    {
      // <Route path="/" component={ HelloWorld } />
      path: '/',
      name: 'HelloWorld',  // Rails path helper
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'Search',
      component: FlightSearch
    },
    {
      path: '/search/:origin/:destination',
      name: 'SearchResults',
      component: FlightSearchResults,
      props: true
      // give us the value of :origin from the path params
      // as just 'this.origin', or in the template,
      // even simpler: 'origin'
      // ... instead of this.$route.params.origin
    },
    {
      path: '/flights/:id',
      name: 'FlightDetails',
      component: FlightDetails,
      props: true
    }


  ]
})
