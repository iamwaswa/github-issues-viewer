import { FilterEnum, Issue, OrNull } from 'src/types';

export enum ActionEnum {
  INCREMENT_PAGE_NUMBER = 'INCREMENT_PAGE_NUMBER',
  FETCH_MORE_ISSUES = 'FETCH_MORE_ISSUES',
  NO_MORE_ISSUES = 'NO_MORE_ISSUES',
  ADD_MORE_ISSUES = 'ADD_MORE_ISSUES',
  ERROR = 'ERROR',
  UPDATE_FILTER = 'UPDATE_FILTER',
}

export type Action =
  | { type: ActionEnum.INCREMENT_PAGE_NUMBER }
  | { type: ActionEnum.FETCH_MORE_ISSUES }
  | { type: ActionEnum.NO_MORE_ISSUES }
  | { type: ActionEnum.ADD_MORE_ISSUES; payload: Array<Issue> }
  | { type: ActionEnum.ERROR; payload: string }
  | { type: ActionEnum.UPDATE_FILTER; payload: FilterEnum };

export type State = {
  issues: OrNull<Issue[]>;
  filter: FilterEnum;
  pageNumber: number;
  loading: boolean;
  error: OrNull<string>;
  hasMoreIssues: boolean;
};

export const initialState: State = {
  issues: null,
  filter: FilterEnum.ALL_ISSUES,
  pageNumber: 1,
  loading: true,
  error: null,
  hasMoreIssues: true,
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionEnum.INCREMENT_PAGE_NUMBER: {
      return { ...state, pageNumber: state.pageNumber + 1 };
    }
    case ActionEnum.FETCH_MORE_ISSUES: {
      return { ...state, error: null, loading: true };
    }
    case ActionEnum.NO_MORE_ISSUES: {
      return {
        ...state,
        hasMoreIssues: false,
        issues: state.issues === null ? [] : [...state.issues],
      };
    }
    case ActionEnum.ADD_MORE_ISSUES: {
      return {
        ...state,
        error: null,
        loading: false,
        issues:
          state.issues === null
            ? [...action.payload]
            : [...state.issues, ...action.payload],
      };
    }
    case ActionEnum.ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        issues: null,
      };
    }
    case ActionEnum.UPDATE_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
