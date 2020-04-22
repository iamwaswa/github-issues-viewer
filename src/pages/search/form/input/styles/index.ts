import styled from 'styled-components';

export const Input = styled.input`
  box-shadow: inset 0 1px 2px ${(props): string => props.theme.colors.boxShadow},
    0px 1px 2px ${(props): string => props.theme.colors.boxShadow};
  border: none;
  border-radius: 2px;
  padding: 0.5rem;
`;

Input.displayName = `Input`;
