
import { render, screen, fireEvent } from '@testing-library/react';

// Import the Router environment for this component:
import { Outlet } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// const fakeHistory = createMemoryHistory();

const mockUseNavigate = jest.fn(); // create a mock function

jest.mock('react-router-dom', () => ({
  // ...jest.requireActual('react-router-dom'),
  useNavigate: mockUseNavigate,
}));

import SearchForm from './SearchForm';

describe('<SearchForm>', () => {

  it('shows a search text input', () => {

    render(
         <SearchForm/>
     );

     const searchInput = screen.getByRole( 'textbox' );
    expect( searchInput ).toBeInTheDocument();

     // expect(mockUseNavigate).toHaveBeenCalledWith('/search/test');

  }); // it shows a search form input


  describe('Form submision', () => {

    let searchInput;
      // beforeEach with change event
      beforeEach( () => {
        render( <SearchForm/> );
        searchInput = screen.getByRole( 'textbox' );
      });


    it('shows the typed text on the page', () => {

      // screen.debug();

      // Act
      fireEvent.change(searchInput, {
        target: { value: 'dogs' } // simulate typing into the form
      });

      // Assert - only works if search text appearing on page
      // const searchTextOnPage = screen.getByText( /dogs/i );
      // expect(searchTextOnPage).toBeInTheDocument();

    });


    it('pushes a search route which includes the typed query', () => {

      // Act
      fireEvent.change(searchInput, { target: { value: 'dogs' } });
      // Act
      const submitButton = screen.getByRole( 'button' );
      // screen.debug(submitButton);
      fireEvent.click( submitButton );

      // Assert
      expect( mockUseNavigate ).toHaveBeenCalledWith('/search/dogs');
    });

  }); // describe 'Form submission'

}); // describe SearchForm
