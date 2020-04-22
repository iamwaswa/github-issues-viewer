import * as React from 'react';

import { CustomRouteProps, DefaultExport } from 'src/types';
import { Route, Switch, useLocation } from 'react-router-dom';

import { Loader } from '../loader';
import { Page } from './styles';

export const LazySearchPage = React.lazy(
  (): Promise<DefaultExport> => {
    return import(`src/pages/search`);
  }
);

export const LazyResultsPage = React.lazy(
  (): Promise<DefaultExport> => {
    return import(`src/pages/results`);
  }
);

const data: CustomRouteProps[] = [
  {
    path: `/`,
    exact: true,
    component: LazySearchPage,
  },
  {
    path: `/:owner/:repo`,
    component: LazyResultsPage,
  },
];

export const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <React.Suspense
        fallback={<Loader message='Getting page ready...' wholePage={true} />}
      >
        {data.map(
          ({
            component: Component,
            exact,
            path,
          }: CustomRouteProps): JSX.Element => (
            <Route
              key={path}
              exact={exact}
              path={path}
              render={(): JSX.Element => (
                <Page>
                  <Component />
                </Page>
              )}
            />
          )
        )}
      </React.Suspense>
    </Switch>
  );
};
