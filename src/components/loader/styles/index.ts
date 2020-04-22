import styled, { keyframes } from 'styled-components';

interface IProps {
  wholePage?: boolean;
}

export const LoaderContainer = styled.section<IProps>`
  width: 100vw;
  height: ${({ wholePage }: IProps): string => (wholePage ? `100vh` : `auto`)};
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

LoaderContainer.displayName = `LoaderContainer`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.section`
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-block-start: 2px solid ${(props): string => props.theme.primary};
  border-inline-end: 2px solid ${(props): string => props.theme.primary};
  border-block-end: 2px solid ${(props): string => props.theme.primary};
  height: 50px;
  width: 50px;
  animation-name: ${spin};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

Spinner.displayName = `Spinner`;
