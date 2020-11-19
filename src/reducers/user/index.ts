import { USER } from '../../utils/dispatchTypes';
import { UserReducer, ActionTypes } from './types';

const initialState: UserReducer = {
  user: undefined,
};

const user = (state: UserReducer = initialState, action: ActionTypes): UserReducer => {
  switch (action.type) {
    case USER.SET:
      return { ...state, user: action.user };
    default:
      return { ...state };
  }
};

export default user;
