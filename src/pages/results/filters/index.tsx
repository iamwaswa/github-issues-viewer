import * as React from 'react';

import { Callback, FilterEnum, OrNull } from 'src/types';

import ClosedIssueSvg from 'src/icons/issue-closed.svg';
import { Container } from './container/styles';
import { FilterButton } from './button/styles';
import { Icon } from './icon/styles';
import PullRequestSvg from 'src/icons/pull-request.svg';

type IProps = {
  filter: FilterEnum;
  setFilter: Callback<FilterEnum, void>;
};

export const Filters: React.FC<IProps> = ({ filter, setFilter }) => {
  const mobileBreakPoint = React.useRef(`444px`);

  const displayIcon = (item: FilterEnum): OrNull<JSX.Element> => {
    switch (item) {
      case FilterEnum.ALL_ISSUES:
      case FilterEnum.OPEN_ISSUES:
        return null;
      case FilterEnum.CLOSED_ISSUES:
        return <Icon selected={item === filter} src={ClosedIssueSvg} />;
      case FilterEnum.PULL_REQUESTS:
        return <Icon selected={item === filter} src={PullRequestSvg} />;
      default:
        throw new Error(`Unknown filter type: ${item}`);
    }
  };

  return (
    <Container mobileBreakPoint={mobileBreakPoint.current}>
      {Object.values(FilterEnum).map(
        (item: FilterEnum, index: number, array: FilterEnum[]): JSX.Element => (
          <FilterButton
            key={item}
            onClick={(): void => {
              setFilter(item);
            }}
            selected={item === filter}
            isLastFilter={index + 1 === array.length}
            mobileBreakPoint={mobileBreakPoint.current}
          >
            {displayIcon(item)}
            {item}
          </FilterButton>
        )
      )}
    </Container>
  );
};
