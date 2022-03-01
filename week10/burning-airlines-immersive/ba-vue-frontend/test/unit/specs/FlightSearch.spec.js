import Vue from 'vue';
import { mount } from '@vue/test-utils';

import FlightSearch from '@/components/FlightSearch';

describe('<FlightSearch>', () => {

  it('should render a search form', () => {

    const wrapper = mount(FlightSearch);

    // console.log('text:', wrapper.text());

    expect( wrapper.text() ).to.contain('Search Flights');

  });


}); // describe <FlightSearch>
