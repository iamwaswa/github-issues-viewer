import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 1px;
  padding: 0.5rem 1rem;
`;

Container.displayName = `IssuesContainer`;
