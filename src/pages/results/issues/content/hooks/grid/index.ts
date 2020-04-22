import * as React from 'react';

import { Issue, OrNull } from 'src/types';

import { useRowSpans } from './rowSpans';

type Args = {
  issues: OrNull<Issue[]>;
  parent: React.MutableRefObject<OrNull<HTMLElement>>;
};

type useGrid = {
  issueRefs: OrNull<Array<React.RefObject<HTMLElement>>>;
  rowSpans: OrNull<Array<string>>;
};

export const useGrid = ({ issues, parent }: Args): useGrid => {
  const [issueRefs, setIssueRefs] = React.useState<
    OrNull<Array<React.RefObject<HTMLElement>>>
  >(null);
  const { rowSpans } = useRowSpans({ issueRefs, parent });

  React.useEffect((): void => {
    if (issues) {
      setIssueRefs(
        issues.map(
          (): React.RefObject<HTMLElement> => React.createRef<HTMLElement>()
        )
      );
    } else {
      setIssueRefs(null);
    }
  }, [issues]);

  return {
    issueRefs,
    rowSpans,
  };
};
