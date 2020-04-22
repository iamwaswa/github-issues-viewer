import * as React from 'react';

import { CardHeader, IconContainer } from './styles';

import { CardHeaderIcon } from 'src/styles/cardHeaderIcon';
import ClosedIssueSvg from 'src/icons/issue-closed.svg';
import { Issue } from 'src/types';
import PullRequestSvg from 'src/icons/pull-request.svg';

interface IProps {
  issue: Issue;
}

export const Header: React.FC<IProps> = ({
  issue: { title, pull_request: pullRequest, state },
}) => {
  return (
    <CardHeader>
      {title}
      <IconContainer>
        <CardHeaderIcon
          alt='Primary issue icon'
          src={
            pullRequest !== undefined
              ? PullRequestSvg
              : state === `closed`
              ? ClosedIssueSvg
              : undefined
          }
        />
        <CardHeaderIcon
          alt='Secondary issue icon'
          src={
            pullRequest !== undefined && state === `closed`
              ? ClosedIssueSvg
              : undefined
          }
        />
      </IconContainer>
    </CardHeader>
  );
};
