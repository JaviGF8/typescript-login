import { UserType } from '../../utils/commonTypes';

export type UserReducer = {
  user?: UserType,
};

export type ActionTypes = {
  type: string,
  user?: UserType,
};
