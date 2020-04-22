import styled from 'styled-components';

interface IProps {
  src?: string;
}

export const CardHeaderIcon = styled.img`
  display: ${({ src }: IProps): string => (src ? `inline` : `none`)};
  margin-inline-start: 1rem;
  height: 15px;
  width: 15px;
  filter: invert(1);
`;

CardHeaderIcon.displayName = `CardHeaderIcon`;
