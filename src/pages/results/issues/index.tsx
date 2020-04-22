import * as React from 'react';

import { FilterEnum, Issue, OrNull } from 'src/types';

import { Container } from './styles';
import { Content } from './content';
import { Error } from 'src/styles/error';
import { Loader } from '../../../components/loader';
import { useFilteredIssues } from './hooks/filtered';

interface IProps {
  error: OrNull<string>;
  filter: FilterEnum;
  loading: boolean;
  issues: OrNull<Issue[]>;
  setElement: React.Dispatch<React.SetStateAction<OrNull<HTMLElement>>>;
}

export const Issues: React.FC<IProps> = ({
  error,
  filter,
  loading,
  issues,
  setElement,
}) => {
  const container = React.useRef<OrNull<HTMLElement>>(null);
  const { filteredIssues } = useFilteredIssues({ filter, issues });

  return (
    <>
      <Container ref={container}>
        {error ? (
          <Error>{error}</Error>
        ) : (
          <Content
            issues={filteredIssues}
            parent={container}
            setElement={setElement}
          />
        )}
      </Container>
      {loading && (
        <Loader
          message={`Fetching${issues === null ? `` : ` more`} issues...`}
        />
      )}
    </>
  );
};
