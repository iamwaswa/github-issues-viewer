import { OrNull } from 'src/types';

export type State = {
  error: OrNull<string>;
  url: OrNull<string>;
  valid: boolean;
};

export enum ActionEnum {
  RESET = 'RESET',
  VALIDATE = 'VALIDATE',
  URL = 'URL',
}

export type Action =
  | { type: ActionEnum.RESET }
  | { type: ActionEnum.VALIDATE; payload: string }
  | { type: ActionEnum.URL; payload: string };

export const initialState: State = {
  error: null,
  url: null,
  valid: false,
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionEnum.VALIDATE: {
      // * Test that the github repo url is valid
      const urlRegex = /^(http|https):\/\/(www\.)?github\.com\/(.)+\/(.)+/;
      return urlRegex.test(action.payload)
        ? { ...state, valid: true }
        : {
            error: `You have entered an invalid github repo url. The repo url should be something like https://github.com/owner/repo`,
            valid: false,
            url: null,
          };
    }
    case ActionEnum.URL: {
      return { ...state, url: action.payload };
    }
    default: {
      return state;
    }
  }
};
