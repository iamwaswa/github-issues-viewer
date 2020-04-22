import * as React from 'react';

import { Issue, OrNull } from 'src/types';

import { IssueDisplay } from './issue';
import { useGrid } from './hooks/grid';

interface IProps {
  issues: OrNull<Issue[]>;
  parent: React.MutableRefObject<OrNull<HTMLElement>>;
  setElement: React.Dispatch<React.SetStateAction<OrNull<HTMLElement>>>;
}

export const Content: React.FC<IProps> = ({ issues, parent, setElement }) => {
  const { issueRefs, rowSpans } = useGrid({ issues, parent });

  if (!issues) {
    return null;
  }

  const allIssues =
    issues.length > 0
      ? issues.map(
          (issue: Issue, index: number): JSX.Element => (
            <IssueDisplay
              key={issue.id}
              container={issueRefs?.[index]}
              issue={issue}
              setElement={index + 1 === issues.length ? setElement : undefined}
              rowEnd={rowSpans?.[index]}
            />
          )
        )
      : [];

  if (issues.length > 0) {
    return <>{allIssues}</>;
  }

  return <p>No issues to show!</p>;
};
