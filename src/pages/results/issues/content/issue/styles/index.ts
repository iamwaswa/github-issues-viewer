import { OrNull, Theme } from 'src/types';
import styled, { Keyframes, ThemeProps, keyframes } from 'styled-components';

const cardAppear = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

interface IProps extends ThemeProps<Theme> {
  mountedBefore: boolean;
}

export const Card = styled.section<IProps>`
  border-radius: 2px;
  box-shadow: 0px 8px 15px
    ${(props: IProps): string => props.theme.colors.boxShadow};
  opacity: ${({ mountedBefore }: IProps): number => (mountedBefore ? 1 : 0)};
  width: 100%;
  animation-name: ${({ mountedBefore }: IProps): OrNull<Keyframes> =>
    mountedBefore ? null : cardAppear};
  animation-delay: 300ms;
  animation-duration: 500ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  transform-origin: top left;
`;

Card.displayName = `IssueCard`;
