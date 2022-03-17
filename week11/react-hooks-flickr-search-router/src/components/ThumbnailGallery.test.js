
import { render, screen, fireEvent } from '@testing-library/react';

import ThumbnailGallery from './ThumbnailGallery';


jest.mock('react-router-dom', () => ({
  useParams: () => ({ searchText: 'ocean coral' })
}) );

// TODO: write test for useFlickrSearchResults custom hook
// jest.mock('axios', () => ({
//   get: () => Promise.resolve({ data: {???} })
// }));

jest.mock('../hooks/flickr', () => ({
  useFlickrSearchResults: (query) => ({
    resultPhotos: [
      { id: 1, title: 'test title' },
      { id: 2, title: 'test title' },
      { id: 3, title: 'test title' },
    ],
    loading: false,
    error: null
  })
}))


describe('<ThumbnailGallery>', () => {

  beforeEach( () => {
    render( <ThumbnailGallery/> );
  });

  it('shows the searched text on the page', () => {
    // screen.debug();
    const resultsQueryText = screen.getByText('Results for ocean coral');
    expect( resultsQueryText ).toBeInTheDocument();

    // const loadingMessage = screen.getByText('Loading results...');
    // expect( loadingMessage ).toBeInTheDocument();
  });


  it('shows the result thumbnails on the page', async () => {


    // TODO: maybe fake the axios.get() promise after all?
    const thumbnails = await screen.findAllByAltText( 'test title' );
    // screen.debug();

    expect( thumbnails.length ).toBe( 3 );


  });


}); // describe <ThumbnailGallery>
