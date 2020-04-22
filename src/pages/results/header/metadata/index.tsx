import * as React from 'react';

import { Container, Owner, Path, Repo } from './styles';

interface IProps {
  owner: string;
  repo: string;
}

export const Metadata: React.FC<IProps> = ({ owner, repo }) => {
  return (
    <>
      <Path>{`github.com/${owner}/${repo}`}</Path>
      <Container>
        <Owner>Owner: {owner}</Owner>
        <Repo>Repo: {repo}</Repo>
      </Container>
    </>
  );
};
