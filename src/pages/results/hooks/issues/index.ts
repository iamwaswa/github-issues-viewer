import { ActionEnum, initialState, reducer } from './reducer';
import { Callback, FilterEnum, Issue, OrNull } from 'src/types';

import React from 'react';
import axios from 'axios';
import { useIntersectionObserver } from './intersectionObserver/index';

type Args = {
  owner: string;
  repo: string;
};

type UseIssues = {
  issues: OrNull<Issue[]>;
  error: OrNull<string>;
  loading: boolean;
  setElement: React.Dispatch<React.SetStateAction<OrNull<HTMLElement>>>;
  filter: FilterEnum;
  setFilter: Callback<FilterEnum, void>;
};

export const useIssues = ({ owner, repo }: Args): UseIssues => {
  const issuesPageLimit = React.useRef(4);
  const [
    { error, filter, hasMoreIssues, issues, loading, pageNumber },
    updateState,
  ] = React.useReducer(reducer, initialState);
  const { setElement } = useIntersectionObserver({
    hasMoreIssues,
    updateState,
  });

  React.useEffect((): void => {
    if (hasMoreIssues && pageNumber < issuesPageLimit.current) {
      updateState({ type: ActionEnum.FETCH_MORE_ISSUES });
    }
  }, [hasMoreIssues, pageNumber]);

  React.useEffect((): void => {
    if (loading) {
      axios
        .get(
          `https://api.github.com/repos/${owner}/${repo}/issues?state=all&page=${pageNumber}`
        )
        .then(({ data }): void => {
          if (data.length === 0) {
            updateState({ type: ActionEnum.NO_MORE_ISSUES });
          } else {
            updateState({
              type: ActionEnum.ADD_MORE_ISSUES,
              payload: data as Array<Issue>,
            });
          }
        })
        .catch(({ message }): void => {
          updateState({
            type: ActionEnum.ERROR,
            payload: message,
          });
        });
    }
  }, [loading, owner, pageNumber, repo]);

  const setFilter = (newFilter: FilterEnum): void => {
    updateState({ type: ActionEnum.UPDATE_FILTER, payload: newFilter });
  };

  return {
    issues,
    error,
    loading,
    setElement,
    filter,
    setFilter,
  };
};
