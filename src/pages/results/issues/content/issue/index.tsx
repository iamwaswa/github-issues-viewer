import * as React from 'react';

import { Issue, OrNull } from 'src/types';

import { Body } from './body';
import { Card } from './styles';
import { Footer } from './footer';
import { Header } from './header';

interface IProps {
  issue: Issue;
  container?: React.RefObject<HTMLElement>;
  rowEnd?: string;
  setElement?: React.Dispatch<React.SetStateAction<OrNull<HTMLElement>>>;
}

export const IssueDisplay: React.FC<IProps> = ({
  container,
  issue,
  rowEnd,
  setElement,
}) => {
  const mountedBefore = React.useRef<boolean>(false);

  React.useEffect((): void => {
    if (rowEnd) {
      mountedBefore.current = true;
    }
  }, [rowEnd]);

  return (
    <Card
      key={issue.id}
      mountedBefore={mountedBefore.current}
      ref={setElement}
      style={rowEnd ? { gridRowEnd: rowEnd } : {}}
    >
      <section ref={container}>
        <Header issue={issue} />
        <Body issue={issue} />
        <Footer issue={issue} />
      </section>
    </Card>
  );
};
