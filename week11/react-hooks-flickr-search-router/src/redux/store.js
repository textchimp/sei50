
import { createStore } from 'redux';

const initialState = {
  counter: 0,
  // more key-val pairs can go here
};

// A reducer is a pure function that takes the current state object,
// an action to perform on that state (and optionally a "payload" which
// is like arguments given along with the action),
// and returns the *entire* new state object as updated by the action
function reducer( state=initialState, action ){

  // We use a switch statement to examine the action type
  // and conditionally run the matching code
  switch( action.type ){

    case 'clickCounter/incremented':
      // NOTE: treat Redux state as immutable! Make copies, no direct changing
      // ... same as with this.setState()
      return {
        ...state,  // return a copy of the other key-val pairs
        counter: state.counter + 1
      }; // return new state object
      // break; // don't need this because we return


    default:
      // Fallback in case no action is matched -
      // return the current state unchanged
      return state;

  } // switch

} // reducer()

// Single named export 'store'
export const store = createStore(
  reducer,
  // optional argument here: initial state value, perhaps from localStorage or DB?
  // might need to merge with the above 'initialState' object?
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
);
