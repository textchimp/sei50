
import { render, screen, fireEvent } from '@testing-library/react';

import SearchForm from './SearchForm';

jest.mock('react-router-dom', () => ({
  Outlet: () => <p>hi</p>, // simple fake version of component
   // ...jest.requireActual('react-router-dom'), // provide the REAL <Outlet> component
  useNavigate: () => mockUseNavigate // ... but provide a mocked useNavigate()
}));


const mockUseNavigate = jest.fn(); // create a mock function

describe('<SearchForm>', () => {

  let searchInput, button;

  beforeEach( () => {
    render( <SearchForm/> );
    searchInput = screen.getByRole( 'textbox' );
    // button = screen.getByText('Search');
    button = screen.getByRole( 'button' );
  });

  it('shows a search text input', () => {
    // screen.debug();
    expect( button ).toBeInTheDocument();

    expect( searchInput ).toBeInTheDocument();
    // screen.debug( button );
  }); // it shows a search form input


  it('calls useNavigate with a route argument which includes the typed query', () => {

    fireEvent.change(searchInput, {
      target: { value: 'dogs' }
    });

    fireEvent.click( button );

    expect( mockUseNavigate ).toHaveBeenCalledWith('/search/dogs');

  }); // it pushes the right route



}); // describe SearchForm
