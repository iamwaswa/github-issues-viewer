import * as React from 'react';

import { OrNull } from 'src/types';

type Args = {
  issueRefs: OrNull<Array<React.RefObject<HTMLElement>>>;
  parent: React.MutableRefObject<OrNull<HTMLElement>>;
};

type UseRowSpans = {
  rowSpans: OrNull<Array<string>>;
};

export const useRowSpans = ({ issueRefs, parent }: Args): UseRowSpans => {
  const [rowSpans, setRowSpans] = React.useState<OrNull<Array<string>>>(
    () => null
  );

  const calculateRowSpan = React.useCallback(
    (issueRef: React.RefObject<HTMLElement>): string => {
      if (parent.current && issueRef.current) {
        const rowHeight = parseInt(
          window
            .getComputedStyle(parent.current)
            .getPropertyValue(`grid-auto-rows`)
        );
        const rowGap = parseInt(
          window
            .getComputedStyle(parent.current)
            .getPropertyValue(`grid-row-gap`)
        );

        const issueHeight = issueRef.current.offsetHeight;

        const rowSpan = Math.round(
          (issueHeight + rowGap) / (rowHeight + rowGap)
        );

        return `span ${rowSpan}`;
      }

      return ``;
    },
    [parent]
  );

  const updateRowSpans = React.useCallback((): void => {
    if (parent && issueRefs) {
      setRowSpans(issueRefs.map(calculateRowSpan));
    } else {
      setRowSpans(null);
    }
  }, [calculateRowSpan, issueRefs, parent]);

  React.useEffect((): void => {
    updateRowSpans();
  }, [updateRowSpans]);

  React.useEffect((): (() => void) => {
    const callback = updateRowSpans;

    window.addEventListener(`resize`, callback);

    return (): void => {
      window.removeEventListener(`resize`, callback);
    };
  }, [updateRowSpans]);

  return {
    rowSpans,
  };
};
