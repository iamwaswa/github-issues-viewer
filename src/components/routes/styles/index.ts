import styled, { keyframes } from 'styled-components';

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

export const Page = styled.main`
  height: 100vh;
  min-height: 400px;
  width: 100vw;
  min-width: 320px;
  animation-duration: 300ms;

  &.page-enter {
    animation-name: ${slideInLeft};
  }

  &.page-exit {
    animation-name: ${slideOutLeft};
  }
`;
