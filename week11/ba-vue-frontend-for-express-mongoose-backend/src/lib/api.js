import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

const fetchFlightSearchResults = (origin, destination) => {
  const url = `${API_BASE_URL}flights/search/${origin}/${destination}`;
  return axios.get(url);
}; // fetchFlightSearchResults()

const fetchFlightDetails = ( id ) => {
  const url = `${API_BASE_URL}flights/${ id }`;
  return axios.get(url);
}; // fetchFlightDetails()

const createReservation = ( flight_id, row, col ) => {
    const url = `${API_BASE_URL}reservations`;
    return axios.post(url, { flight_id, row, col });
}; // createReservation()

// Named exports (no default here)
export {
  fetchFlightSearchResults,
  fetchFlightDetails,
  createReservation
};
