import * as React from 'react';

import { ActionEnum, initialState, reducer } from './reducer';
import { Callback, OrNull } from 'src/types';

type useValidateUrl = {
  error: OrNull<string>;
  urlValidated: boolean;
  url: OrNull<string>;
  validateUrl: Callback<string, void>;
};

export const useValidateUrl = (): useValidateUrl => {
  const [{ error, url, valid }, updateState] = React.useReducer(
    reducer,
    initialState
  );

  React.useEffect((): void => {
    if (url) {
      updateState({ type: ActionEnum.VALIDATE, payload: url });
    }
  }, [url]);

  const updateUrl = (newUrl: string): void =>
    updateState({ type: ActionEnum.URL, payload: newUrl });

  return {
    error,
    urlValidated: valid,
    url,
    validateUrl: updateUrl,
  };
};
