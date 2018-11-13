import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  DAILY_TASK_DONE,
  ITEMS_LOADING,
    LOGIN_SUCCESSFUL
} from '../actions/types';

const initialState = {
  loginSuccessful: false,
  items: [],
  loading: false
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
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
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
    case DAILY_TASK_DONE:
      return {
        ...state,
        gold:state.gold+10
      };
    default:
      return state;
  }
}
