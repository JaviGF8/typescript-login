import { ReactNode } from 'react';

export type ButtonTypes = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  icon?: any,
  inverted?: boolean;
  loading?: boolean;
  loadingColor?: 'white' | 'black' | 'primary' | 'secondary';
  onClick?(): void;
  text?: string;
  type: ButtonTypes;
}
