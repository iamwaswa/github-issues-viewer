import * as React from 'react';

import { Action, ActionEnum } from '../reducer';

import { OrNull } from 'src/types';

type UseIntersectionObserver = {
  setElement: React.Dispatch<React.SetStateAction<OrNull<HTMLElement>>>;
};

type Args = {
  hasMoreIssues: boolean;
  updateState: React.Dispatch<Action>;
};

export const useIntersectionObserver = ({
  hasMoreIssues,
  updateState,
}: Args): UseIntersectionObserver => {
  const [element, setElement] = React.useState<OrNull<HTMLElement>>(null);
  const observer = React.useRef<IntersectionObserver>();

  React.useEffect((): void => {
    if (observer.current) {
      observer.current.disconnect();
    }

    if (element && hasMoreIssues) {
      observer.current = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]): void => {
          if (entries[0].isIntersecting) {
            updateState({ type: ActionEnum.INCREMENT_PAGE_NUMBER });
          }
        }
      );

      observer.current.observe(element);
    }
  }, [element, hasMoreIssues, updateState]);

  return {
    setElement,
  };
};
