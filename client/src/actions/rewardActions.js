import axios from 'axios';
import { GET_REWARDS, ADD_REWARD, DELETE_REWARD, REWARDS_LOADING, LOGIN_SUCCESSFUL, DECREASE_GOAL } from './types';

export const getRewards = () => dispatch => {
  dispatch(setRewardsLoading());
  axios.get('/api/rewards').then(res =>
    dispatch({
      type: GET_REWARDS,
      payload: res.data
    })
  );
};

export const addReward = reward => dispatch => {
  axios.post('/api/rewards', reward).then(res =>
    dispatch({
      type: ADD_REWARD,
      payload: res.data
    })
  );
};

export const deleteReward = id => dispatch => {
  axios.delete(`/api/rewards/${id}`).then(res =>
    dispatch({
      type: DELETE_REWARD,
      payload: id
    })
  );
};

export const setRewardsLoading = () => {
  return {
    type: REWARDS_LOADING
  };
};

export const setLoginSuccessful = () => {
	return {
		type: LOGIN_SUCCESSFUL
	};
};

export const setDecreaseCounter = () => {
  return {
    type : DECREASE_GOAL
  }
}