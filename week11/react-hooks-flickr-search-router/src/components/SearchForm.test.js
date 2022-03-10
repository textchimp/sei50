import { render, screen, fireEvent } from '@testing-library/react';

import SearchForm from './SearchForm';

// So we can fake that history.push() ....
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

// Create a fake version of the router history
// that is relied on by the app code we're testing
const fakeHistory = createMemoryHistory();

let searchInput = null;

// Runs callback uniquely before each example runs
// see also beforeAll() -- runs callback ONCE in total before running all tests
beforeEach( () => {

  // Arrange
  render(
    <Router history={ fakeHistory }>
      <SearchForm />
    </Router>
  );

  searchInput = screen.getByRole( 'textbox' );
  // console.log(searchInput);
  // screen.debug(searchInput);

}); // beforeEach()



// same as test()
it('shows a search text input', () => {

  // The render() now happens in the beforeEach() callback

  // Assert
  expect( searchInput ).toBeInTheDocument();

}); // end of first it() test example



// A describe() lets you group related test examples, gives nicer output
// when the test suite runs, and lets you define beforeEach() callbacks
// that just run for this group of examples
describe('Form submision', () => {

    // beforeEach with change even

  it('shows the typed text on the page', () => {

    // Act
    fireEvent.change(searchInput, {
      target: {
        value: 'dogs' // simulate typing into the form
      }
    });

    // Assert
    const searchTextOnPage = screen.getByText( /dogs/i );
    expect(searchTextOnPage).toBeInTheDocument();

  });


  it('pushes a search route which includes the typed query', () => {

    // Act
    fireEvent.change(searchInput, { target: { value: 'dogs' } });
    // Act
    const submitButton = screen.getByRole( 'button' );
    // screen.debug(submitButton);
    fireEvent.click( submitButton );

    // Assert
    // console.log(fakeHistory);
    expect( fakeHistory.location.pathname ).toBe( '/search/dogs' );

  });



}); // describe 'Form submission'
