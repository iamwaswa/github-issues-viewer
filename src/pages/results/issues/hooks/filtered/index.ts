import * as React from 'react';

import { FilterEnum, Issue, OrNull } from 'src/types';

type Args = {
  filter: FilterEnum;
  issues: OrNull<Array<Issue>>;
};

type UseFilteredIssues = {
  filteredIssues: OrNull<Array<Issue>>;
};

export const useFilteredIssues = ({
  filter,
  issues,
}: Args): UseFilteredIssues => {
  const [filteredIssues, setFilteredIssues] = React.useState<
    OrNull<Array<Issue>>
  >(null);

  React.useEffect((): void => {
    setFilteredIssues(
      issues
        ? issues.filter(
            ({ pull_request: pullRequest, state }: Issue): boolean => {
              switch (filter) {
                case FilterEnum.ALL_ISSUES:
                  return true;
                case FilterEnum.PULL_REQUESTS:
                  return pullRequest !== undefined;
                case FilterEnum.CLOSED_ISSUES:
                  return state === `closed`;
                case FilterEnum.OPEN_ISSUES:
                  return state === `open`;
                default:
                  throw new Error(`Unknown filter: ${filter}`);
              }
            }
          )
        : null
    );
  }, [filter, issues]);

  return {
    filteredIssues,
  };
};
