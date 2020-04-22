import * as React from 'react';

import { Container, Title } from './styles';

import { Metadata } from './metadata';

interface IProps {
  owner: string;
  repo: string;
}

export const Header: React.FC<IProps> = (props) => {
  return (
    <Container>
      <Title>Github Issues Viewer</Title>
      <Metadata {...props} />
    </Container>
  );
};

Header.displayName = `ResultsHeader`;
