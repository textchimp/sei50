import Vue from 'vue';
import { mount } from '@vue/test-utils';
import sinon from 'sinon'; // mock library

import FlightSearchResults from '@/components/FlightSearchResults';

import axios from 'axios'; // so we can mock it

const fakeFlights = [
  {
    id: 1,
    flight_number: 'BA256',
    departure_date: '2022-03-01T04:20:00.000Z',
    origin: 'SYD',
    destination: 'MEL',
    airplane_id: 7,
    created_at: '2022-02-28T01:44:21.490Z',
    updated_at: '2022-02-28T01:44:21.490Z',
    airplane: {
      name: '747'
    }
  }, // First flight
  {
    id: 2,
    flight_number: 'BA512',
    departure_date: '2022-03-02T11:20:00.000Z',
    origin: 'SYD',
    destination: 'MEL',
    airplane_id: 7,
    created_at: '2022-02-28T01:44:21.504Z',
    updated_at: '2022-02-28T01:44:21.504Z',
    airplane: {
      name: '737 MAX'
    }
  } // second flight
];

axios.get = sinon.stub().returns( Promise.resolve( {data: fakeFlights} ) );

const $router = {
  push: sinon.spy()
};

describe('<FlightSearchResults>', () => {

  let wrapper;
  beforeEach( () => {

    wrapper = mount(FlightSearchResults, {
      mocks: { $router: $router  },
      propsData: { origin: 'SYD', destination: 'MEL'  } // fake props (from router)
    });

    // spy - fake version of a function that lets
    //       you ask whether the function was called
    //       or not by the application code, and
    //       which arguments it was called with
    // stub - a spy which ALSO lets you fake
    //        the behaviour (i.e. the return value)
    //        of the function you are faking


  }); // beforeEach



  it('should render without errors', () => {
    expect( wrapper.text()).to.contain('Search Results from SYD to MEL');
    expect( wrapper.text()).to.contain('Loading flight results');
  }); // it renders without smoke pouring out of it

  it('should render a list of matching flights', async () => {
    // console.log('page:', wrapper.text() );

    // The axios.get() inside the component's mounted() method
    // returns a promise, and the component will not have access to the
    // AJAX response, and can't show the flights on its template, UNTIL
    // that axios promise resolves
    await wrapper.vm.$nextTick();

    // console.log('page after waiting:', wrapper.text());

    // Test that our stubbed version (which is also a spy) was called with
    // the correct Rails API endpoint URL (including the test origin
    // & destination)
    // TODO: don't rely on hardcoded URLs - extract them into a config file
    // that is imported by the component, and also imported by this test
    // spec file
    expect( axios.get ).to.have.been.calledWith( 'http://localhost:3000/flights/search/SYD/MEL' );

    // It should stop showing the loading message once the response data arrives!
    expect( wrapper.text() ).to.not.contain('Loading flight results');

    const results = wrapper.findAll('div.results');

    // It should show the same number of results as in our fakeData flights array
    expect( results.length ).to.equal( 2 );

    // The first flight result should contain the flight number
    expect( results.at(0).text() ).to.contain('BA256');

    // The first flight result should also contain the airplane model
    expect( results.at(0).text() ).to.contain('747');

    // TODO: do the same checks for the second test flight

  }); // it renders flights



  it('should push the clicked result to the router', async () => {

      await wrapper.vm.$nextTick(); // wait for results to render

      const results = wrapper.findAll('div.results div');

      await results.at(0).trigger('click'); // click the result to trigger a push

      expect( $router.push ).to.have.been.calledWith( sinon.match({
        name: 'FlightDetails',
        params: { id: 1 }
      }))

  }); // it navigates to the details page



}); // describe <FlightSearchResults>
