import { ReactNode } from 'react';
import { UserType } from '../../utils/commonTypes';

export type NavigatorProps = {
  children: ReactNode,
  user?: UserType;
};
