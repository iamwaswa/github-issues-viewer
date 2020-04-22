import * as React from 'react';

import { Container } from './container/styles';
import { SearchForm } from './form';
import { SearchTitle } from './title';
import { useNavigateToResults } from './hooks/navigateToResults';
import { useValidateUrl } from './hooks/validateUrl';

const SearchPage: React.FC = () => {
  const { error, urlValidated, url, validateUrl } = useValidateUrl();
  const navigateToResultsPage = useNavigateToResults(url);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const { value } = form[`search`];

    validateUrl(value as string);
  };

  React.useEffect((): void => {
    if (urlValidated) {
      navigateToResultsPage();
    }
  }, [urlValidated, navigateToResultsPage]);

  return (
    <Container>
      <SearchTitle />
      <SearchForm error={error} handleSubmit={handleSubmit} />
    </Container>
  );
};

SearchPage.displayName = `SearchPage`;

export default SearchPage;
