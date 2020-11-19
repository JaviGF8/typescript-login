import React, { FC, useState } from 'react';

import LoginForm from '../../components/LoginForm';

import './index.scss';

const LandingPage: FC = () => {
  const [ loading, setLoading ] = useState(false);

  return (
    <div className="landing">
      <LoginForm />
    </div>
  );
};

export default LandingPage;
