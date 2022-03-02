import Vue from 'vue';
import { mount } from '@vue/test-utils';

import axios from 'axios';

import FlightSearchResults from '@/components/FlightSearchResults';
const $router = { push: sinon.spy() };

const fakeSearchResults = [
  {
    id: 1,
    flight_number: 'Test Flight 1',
    departure_date_formatted: 'Test Departure Date 1',
    origin: 'SYD',
    destination: 'MEL',
    airplane: { name: 'Test Plane 1' }
  },
  {
    id: 2,
    flight_number: 'Test Flight 2',
    departure_date_formatted: 'Test Departure Date 2',
    origin: 'SYD',
    destination: 'MEL',
    airplane: { name: 'Test Plane 2' }
  },
];

axios.get = sinon.stub().returns( Promise.resolve( {data: fakeSearchResults} ) );


describe('<FlightSearchResults>', () => {

  it('should render a search form', async () => {
    const wrapper = mount(
      FlightSearchResults,
      { mocks: { $router } }
    );

    console.log(wrapper.text());

    await wrapper.vm.$nextTick();

    console.log(wrapper.text());

  });

});
