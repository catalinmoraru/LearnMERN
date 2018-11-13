import {
    GET_REWARDS,
    ADD_REWARD,
    DELETE_REWARD,
    REWARDS_LOADING,
    LOGIN_SUCCESSFUL,
    DECREASE_GOAL, GET_REWARD
} from '../actions/types';

const initialState = {
  loginSuccessful: false,
    rewards: [],
  loading: false,
  gold: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
      case GET_REWARDS:
          return {
              ...state,
              rewards: action.payload,
              loading: false
          };
    case DELETE_REWARD:
      return {
        ...state,
        rewards: state.rewards.filter(reward => reward._id !== action.payload)
      };
    case ADD_REWARD:
      return {
        ...state,
        gold : state.gold - 1,
        rewards: [action.payload, ...state.rewards],
  
      };
    case REWARDS_LOADING:
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
