import * as React from 'react';

import { CardFooter, FooterLabel, LabelIcon } from './styles';
import { Issue, Label } from 'src/types';

interface IProps {
  issue: Issue;
}

export const Footer: React.FC<IProps> = ({ issue: { labels } }) => (
  <CardFooter>
    {labels.map(
      (label: Label): JSX.Element => (
        <FooterLabel key={label.id}>
          <LabelIcon color={label.color} />
          {label.name || `-`}
        </FooterLabel>
      )
    )}
  </CardFooter>
);
