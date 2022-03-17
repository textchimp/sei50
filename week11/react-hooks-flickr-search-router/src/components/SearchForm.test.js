
import { render, screen, fireEvent } from '@testing-library/react';

// Import the Router environment for this component:
// import { Outlet } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// const fakeHistory = createMemoryHistory();
import SearchForm from './SearchForm';


jest.mock('react-router-dom', () => ({
//   // ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}));


const mockUseNavigate = jest.fn(); // create a mock function

describe('<SearchForm>', () => {

  it('shows a search text input', () => {

    render( <SearchForm/> );


  }); // it shows a search form input


}); // describe SearchForm
