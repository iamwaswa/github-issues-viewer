import styled from 'styled-components';

export const Path = styled.h2`
  margin: 0;
  margin-block-end: 0.25rem;
`;

Path.displayName = `Path`;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

Container.displayName = `MetadataDetailsContainer`;

export const Owner = styled.p`
  margin: 0 0.5rem 0 0;
`;

Owner.displayName = `Owner`;

export const Repo = styled.p`
  margin: 0;
`;

Repo.displayName = `Repo`;
