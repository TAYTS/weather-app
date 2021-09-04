import React from 'react';
import { ReactComponent as CloudIcon } from 'containers/Layout/icons/cloud.svg';

import 'containers/Layout/components/Loading/index.scss';

const Loading: React.FC = () => {
  return (
    <div className="loading-backdrop">
      <CloudIcon className="loading-icon" />
    </div>
  );
};

export default Loading;
