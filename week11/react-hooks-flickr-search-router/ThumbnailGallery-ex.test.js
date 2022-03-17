import { render, screen, fireEvent } from '@testing-library/react';

import ThumbnailGallery from './ThumbnailGallery';

// We want to "mock" or provide a faked version of the useFlickrSearchResults
// imported by the ThumbnailGallery component so we don't have to wait while it
// does real AJAX requests
jest.mock('../hooks/flickr', () => {
  return {
    useFlickrSearchResults: (query) => {
      // We need to return an object containing exactly the same keys
      // that the real useFlickrSearchResults returns!
      return {
        // provide a 'fixture' or some valid-enough data for the component
        resultPhotos: [
          {id: 1, title: 'image'},
          {id: 2, title: 'image'},
          {id: 3, title: 'image'}, // or findAllByTestId('')
        ],
        isLoaded: true,
        error: null,
        // clearResults: jest.fn() // provide a mock function, not used here
      }
    }
  };
});


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ searchText: 'dogs' })
}) );


beforeEach( () => {

  // Arrange
  // Note we need to have ThumbnailGallery rendered as it is in App.js,
  // by a <Route> and with the correct path, so that useParams() works
  // as expected inside the component
  render(
      <ThumbnailGallery />
  );

}); // beforeEach()


describe( '<ThumbnailGallery> component', () => {

  it('shows the search text on the page', () => {
    const resultsQueryText = screen.getByText('Results for dogs');
    expect(resultsQueryText).toBeInTheDocument();
  });

  it('shows the result thumbnails on the page', async () => {

    const thumbnails = await screen.findAllByAltText( 'image' );
    // screen.debug(thumbnails);
    expect( thumbnails.length ).toBe( 3 ); // matches the fake data in the mock

  });

}); // describe ThumbnailGallery
