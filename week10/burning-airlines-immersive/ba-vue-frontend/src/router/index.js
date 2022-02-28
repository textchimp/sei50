import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlightSearch from '@/components/FlightSearch'
import FlightSearchResults from '@/components/FlightSearchResults'

Vue.use(Router)

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
    }


  ]
})
