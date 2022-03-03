import Vue from 'vue';
import { mount } from '@vue/test-utils';
import sinon from 'sinon'; // mock library

import FlightSearchResults from '@/components/FlightSearchResults';

import axios from 'axios'; // so we can mock it

describe('<FlightSearchResults>', () => {

  let wrapper;
  beforeEach( () => {
    wrapper = mount(FlightSearchResults, {
      propsData: { origin: 'SYD', destination: 'MEL'  } // fake props (from router)
    });
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
