import React from 'react';

import 'components/Header/index.scss';
import { HeaderProps } from 'components/Header/types';

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
    </div>
  );
};

export default Header;
