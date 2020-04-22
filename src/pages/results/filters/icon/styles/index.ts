import { CardHeaderIcon } from 'src/styles/cardHeaderIcon';
import styled from 'styled-components';

interface IProps {
  selected?: boolean;
  src?: string;
}

export const Icon = styled(CardHeaderIcon)<IProps>`
  height: 10px;
  width: 10px;
  filter: ${({ selected }: IProps): string =>
    selected ? `invert(1)` : `none`};
  margin-inline-start: 0;
  margin-inline-end: 0.25rem;
`;

Icon.displayName = `MainFilterIcon`;
