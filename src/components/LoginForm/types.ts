export type FormFields = {
  email: string;
  password: string;
};

export type ErrorFields = {
  email?: boolean;
  hasErrors?: boolean;
  password?: boolean;
};
