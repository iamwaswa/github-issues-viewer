import * as React from 'react';

import { LoaderContainer, Spinner } from './styles';

interface IProps {
  message?: string;
  wholePage?: boolean;
}

export const Loader: React.FC<IProps> = ({
  message = `Getting things ready...`,
  wholePage,
}) => {
  return (
    <LoaderContainer wholePage={wholePage}>
      <Spinner />
      <p>{message}</p>
    </LoaderContainer>
  );
};
