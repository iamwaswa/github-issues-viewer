export type OrNull<T> = T | null;
export type Callback<T, U> = (args: T) => U;

export type Label = {
  id: string;
  color: string;
  name: string;
};

export type Issue = {
  id: string;
  title: string;
  body: string;
  state: `open` | `closed`;
  pull_request?: {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
  };
  labels: Label[];
};

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    boxShadow: string;
    error: string;
  };
  fonts: Array<string>;
};

export type DefaultExport = { default: React.ComponentType<{}> };

export type CustomRouteProps = {
  exact?: boolean;
  path: string;
  component: React.ComponentType<{}>;
};

export enum FilterEnum {
  ALL_ISSUES = 'All issues',
  OPEN_ISSUES = 'Open issues',
  CLOSED_ISSUES = 'Closed issues',
  PULL_REQUESTS = 'Pull requests',
}

export enum RoutesEnum {
  SEARCH_PAGE = 'SearchPage',
  RESULTS_PAGE = 'ResultsPage',
}
