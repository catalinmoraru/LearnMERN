import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
    LOGIN_SUCCESSFUL,
    DECREASE_GOAL
} from '../actions/types';

const initialState = {
  loginSuccessful: false,
  items: [],
  loading: false,
  gold: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
		  gold: state.gold + 5
      };
    case ADD_ITEM:
      return {
        ...state,
        gold : state.gold - 1,
        items: [action.payload, ...state.items],
  
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
		  loginSuccessful: true
      };
     case DECREASE_GOAL:
      return {
        ...state,
        gold : state.gold - 1,
      } 
    default:
      return state;
  }
}
