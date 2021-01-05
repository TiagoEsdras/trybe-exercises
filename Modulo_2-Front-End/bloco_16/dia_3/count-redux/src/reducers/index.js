import { INCREASE, DECREASE } from '../actions';

const INITIAL_STATE = {
  count: 0,
}

export const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  };
};
