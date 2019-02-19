import { ADD_SEARCH_TERM } from '../constants/action-types';

export function addSearchTerm(payload) {
  return { type: ADD_SEARCH_TERM, payload }
}