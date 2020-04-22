import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${(props): string => props.theme.colors.primary};
  color: ${(props): string => props.theme.colors.secondary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  margin-block-end: 1rem;
`;

Container.displayName = `ResultsHeaderContainer`;

export const Title = styled.h1`
  margin: 0;
  margin-inline-end: 1rem;
  margin-block-end: 0.5rem;
`;

Title.displayName = `Title`;
