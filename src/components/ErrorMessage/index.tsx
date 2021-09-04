import React from 'react';

import 'components/ErrorMessage/index.scss';
import { ErrorMessageProps } from 'components/ErrorMessage/types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="error-message-container">
      <p className="error-message-text">{message}</p>
    </div>
  );
};

export default ErrorMessage;
