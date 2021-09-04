import React from 'react';
import { useSelector } from 'react-redux';

import { selectLoading } from 'containers/Layout/selectors';
import Loading from 'containers/Layout/components/Loading';
import 'containers/Layout/index.scss';

const Layout: React.FC = ({ children }) => {
  const isLoading = useSelector(selectLoading);

  return (
    <div className="layout-container">
      <>
        {isLoading && <Loading />}
        {children}
      </>
    </div>
  );
};

export default Layout;
