import * as React from 'react';

import { CardBody } from './styles';
import { Issue } from 'src/types';

interface IProps {
  issue: Issue;
}

export const Body: React.FC<IProps> = ({ issue: { body } }) => (
  <CardBody>{body || `-`}</CardBody>
);
