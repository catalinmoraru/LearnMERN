import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import rewardReducer from "./rewardReducer";

export default combineReducers({
  item: itemReducer,
    reward: rewardReducer
});
