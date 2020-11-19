import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../base/Button';
import Input from '../base/Input';
import { FormFields, ErrorFields } from './types';
import { validateEmail } from '../../utils/validators';
import { login } from '../../actions/user';
import './index.scss';
import { USER } from '../../utils/dispatchTypes';
import { showErrorToast, showSuccessToast } from '../../utils/toasts';

const Form: FC = () => {
  const [ loading, setLoading ] = useState(false);
  const [ errors, setErrors ] = useState<ErrorFields>({});
  const [ fields, setFields ] = useState<FormFields>({ email: '', password: '' });
  const dispatch = useDispatch();

  const onChangeField = (key: string, value: string): void => {
    setFields({ ...fields, [key]: value });
  };

  const validate = (): ErrorFields => {
    const errs: ErrorFields = {};

    if (!fields?.email || !validateEmail(fields.email)) {
      errs.hasErrors = true;
      errs.email = true;
    }

    return errs;
  };

  const onLogin = () => {
    const errs = validate();

    setErrors(errs);
    if (!errs.hasErrors) {
      setLoading(true);
      login(fields.email, fields.password).then((user) => {
        dispatch({ type: USER.SET, user });
        showSuccessToast(`Welcome ${user.name}`);
        setTimeout(() => setLoading(false));
      }).catch((error) => {
        showErrorToast(error);
        setLoading(false);
      });
    }
  };

  return (
    <form className="login-form shadow">
      <h2>Sign in</h2>
      <div className="login-form-fields">
        <Input
          disabled={loading}
          onChange={(val) => onChangeField('email', val)}
          placeholder="Email"
          type="text"
          value={fields?.email}
        />
        <Input
          disabled={loading}
          onChange={(val) => onChangeField('password', val)}
          placeholder="Password"
          type="password"
          value={fields?.password}
        />
      </div>
      <Button
        disabled={loading}
        loading={loading}
        onClick={onLogin}
        text="Sign in"
        type="button"
      />
    </form>
  );
};

export default Form;
