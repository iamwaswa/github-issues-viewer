import styled from 'styled-components';

export const Error = styled.p`
  color: ${(props): string => props.theme.colors.error};
  max-width: 60vw;
  min-width: 200px;
`;
