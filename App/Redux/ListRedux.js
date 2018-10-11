import { types } from "./types";
const initialState = {
  isFetching: false,
  error: false
};

export default function ListReducer(state = initialState, action) {
  console.log("List Redux ", action);
  switch (action.type) {
    case types.GET_RESTAURANT_LIST:
      return {
        ...state,
        //contacts: [],
        isFetching: true
      };
    case types.GET_RESTAURANT_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false
        //contacts: action.data
      };
    case types.GET_RESTAURANT_LIST_FAILURE:
      return {
        ...state,
        isFetching: false
        //contacts: action.data
      };
    default:
      return state;
  }
}

///Action Creators
export function getRestaurantList() {
  return {
    type: types.GET_RESTAURANT_LIST,
    payload: null
  };
}
