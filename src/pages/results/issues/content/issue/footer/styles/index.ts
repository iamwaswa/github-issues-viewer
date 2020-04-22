import styled from 'styled-components';

export const CardFooter = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

CardFooter.displayName = `CardFooter`;

export const FooterLabel = styled.p`
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props): string => props.theme.colors.secondary};
  color: ${(props): string => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem 0;
  word-break: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

FooterLabel.displayName = `CardFooterLabel`;

interface IProps {
  color: string;
}

export const LabelIcon = styled.span`
  background-color: ${({ color }: IProps): string => `#${color}`};
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.3);
  margin-inline-end: 5px;
  height: 10px;
  width: 10px;
`;

LabelIcon.displayName = `CardFooterLabelIcon`;
