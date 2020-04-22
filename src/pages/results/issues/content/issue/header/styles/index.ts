import styled from 'styled-components';

export const CardHeader = styled.section`
  background-color: ${(props): string => props.theme.colors.primary};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: ${(props): string => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  word-break: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

CardHeader.displayName = `CardHeader`;

export const IconContainer = styled.section`
  display: flex;
`;

IconContainer.displayName = `CardHeaderIconContainer`;
