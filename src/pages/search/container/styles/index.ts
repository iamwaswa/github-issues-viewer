import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

Container.displayName = `SearchPageContainer`;
