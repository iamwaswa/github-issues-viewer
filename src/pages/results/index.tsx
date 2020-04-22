import * as React from 'react';

import { Container } from './container/styles';
import { Filters } from './filters';
import { Header } from './header';
import { Issues } from './issues';
import { useIssues } from './hooks/issues';
import { useParams } from 'react-router-dom';

interface IParams {
  owner: string;
  repo: string;
}

const ResultsPage: React.FC = () => {
  const { owner, repo } = useParams<IParams>();
  const { filter, setFilter, ...rest } = useIssues({
    owner,
    repo,
  });

  return (
    <Container>
      <Header owner={owner} repo={repo} />
      <Filters filter={filter} setFilter={setFilter} />
      <Issues filter={filter} {...rest} />
    </Container>
  );
};

export default ResultsPage;
