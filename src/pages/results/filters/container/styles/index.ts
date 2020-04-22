import styled from 'styled-components';

interface IProps {
  mobileBreakPoint: string;
}

export const Container = styled.section<IProps>`
  display: flex;
  flex-wrap: wrap;
  margin-inline-start: 1rem;

  ${({ mobileBreakPoint }: IProps): string => {
    return `
      @media screen and (max-width: ${mobileBreakPoint}) {
        flex-direction: column;
        margin-inline-start: 0;
        padding: 1rem;
      }
    `;
  }}
`;

Container.displayName = `FiltersContainer`;
