import Vue from 'vue';
import { mount } from '@vue/test-utils';
import sinon from 'sinon'; // mock library

import FlightSearchResults from '@/components/FlightSearchResults';

import axios from 'axios'; // so we can mock it

const fakeFlights = [
  {
    id: 1,
    flight_number: 'BA123',
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

describe('<FlightSearchResults>', () => {

  let wrapper;
  beforeEach( () => {

    wrapper = mount(FlightSearchResults, {
      propsData: { origin: 'SYD', destination: 'MEL'  } // fake props (from router)
    });

    // spy - fake version of a function that lets
    //       you ask whether the function was called
    //       or not by the application code, and
    //       which arguments it was called with
    // stub - a spy which ALSO lets you fake
    //        the behaviour (i.e. the return value)
    //        of the function you are faking

    axios.get = sinon.stub().returns( Promise.resolve( {data: fakeFlights} ) );

  }); // beforeEach



  it('renders without errors', () => {
    expect( wrapper.text()).to.contain('Search Results from SYD to MEL');
  }); // it renders without smoke pouring out of it

  it('renders a list of matching flights', async () => {
    console.log('page:', wrapper.text() );

    // The axios.get() inside the component's mounted() method
    // returns a promise, and the component will not have access to the
    // AJAX response, and can't show the flights on its template, UNTIL
    // that axios promise resolves
    await wrapper.vm.$nextTick();

    console.log('page after waiting:', wrapper.text());

  }); // it renders flights


}); // describe <FlightSearchResults>
