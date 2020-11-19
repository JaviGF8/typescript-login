import React, { FC, useState } from 'react';

import { InputProps } from './types';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Input: FC<InputProps> = ({
  disabled,
  onChange,
  placeholder,
  type,
  value,
}) => {
  const [ showPassword, setShowPassword ] = useState(false);

  return (
    <div className="input-container">
      {placeholder && <p className="input-placeholder">{placeholder}</p>}
      <div>
        <input
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          type={showPassword && type === 'password' ? 'text' : type}

          value={value}
        />
        {type === 'password' && (
          <button
          className="show-password-button"
          onClick={(): void => setShowPassword(!showPassword)}
          type="button"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
