import React, { FC } from 'react';

import { PageProps } from './types';
import './index.scss';

const Page: FC<PageProps> = ({ children, className, title }) => (
  <div className="page">
    {!!title && <div className="page-header">
      <h2>{title}</h2>
    </div>}
    <div className={`page-content${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  </div>
);

export default Page;
