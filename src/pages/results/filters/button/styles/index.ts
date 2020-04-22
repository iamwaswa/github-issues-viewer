import styled, { ThemeProps } from 'styled-components';

import { Theme } from 'src/types';

interface IProps extends ThemeProps<Theme> {
  isLastFilter: boolean;
  mobileBreakPoint: string;
  selected?: boolean;
}

export const FilterButton = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: IProps): string =>
    props.selected ? props.theme.colors.primary : `inherit`};
  border: none;
  border-radius: 2px;
  color: ${(props: IProps): string =>
    props.selected ? props.theme.colors.secondary : `inherit`};
  box-shadow: 0px 2px 8px
    ${(props: IProps): string => props.theme.colors.boxShadow};
  cursor: pointer;
  margin-inline-end: 0.5rem;
  margin-block-end: 0.5rem;
  padding: 0.5rem 1rem;

  &:hover,
  &:focus {
    color: ${(props: IProps): string | undefined => {
      if (props.selected) {
        return;
      }

      return `rgba(0, 0, 0, 0.5)`;
    }};

    & > img {
      filter: ${(props: IProps): string | undefined => {
        if (props.selected) {
          return;
        }

        return `invert(.5)`;
      }};
    }
  }

  ${({ isLastFilter, mobileBreakPoint }: IProps): string => {
    return `
      @media screen and (max-width: ${mobileBreakPoint}) {
        ${isLastFilter ? `margin-block-end: 0;` : ``}
        margin-inline-end: 0;
      }
    `;
  }}
`;

FilterButton.displayName = `FilterButton`;
