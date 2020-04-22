import * as React from 'react';

import { OrNull } from 'src/types';
import { useHistory } from 'react-router-dom';

export const useNavigateToResults = (url: OrNull<string>): (() => void) => {
  const [navigate, setNavigate] = React.useState<boolean>(false);
  const history = useHistory();

  React.useEffect((): void => {
    if (navigate && url) {
      const domain = `github.com/`;
      const endOfDomain = url.indexOf(domain) + domain.length;

      const repoUrlParameters = url.slice(endOfDomain);
      const [owner, repo] = repoUrlParameters.split(`/`);

      // * Go to results page with owner and repo as params
      history.push(`/${owner}/${repo}`);
    }
  }, [history, navigate, url]);

  const navigateToResultsPage = (): void => setNavigate(true);

  return navigateToResultsPage;
};
