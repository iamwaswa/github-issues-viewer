import styled from 'styled-components';

export const SubmitButton = styled.button`
  align-self: flex-end;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 2px 8px ${(props): string => props.theme.colors.boxShadow};
  cursor: pointer;
  padding: 0.5rem 1rem;

  &:hover,
  &:focus {
    background-color: ${(props): string => props.theme.colors.primary};
    color: ${(props): string => props.theme.colors.secondary};
  }
`;

SubmitButton.displayName = `SubmitButton`;
