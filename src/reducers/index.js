
import { ADD_SEARCH_TERM } from '../constants/action-types';

const initialState = {
  searchTerms: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_SEARCH_TERM) {
    return Object.assign({}, state, {
      searchTerms: state.searchTerms.concat(action.payload)
    })
  }
  return state;
}

export default rootReducer;