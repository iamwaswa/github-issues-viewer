import * as React from 'react';

import { Callback, OrNull } from 'src/types';

import { Container } from './input/container/styles';
import { Content } from './content/styles';
import { Error } from 'src/styles/error';
import { Form } from './styles';
import { Input } from './input/styles';
import { Label } from './input/container/label/styles';
import { SubmitButton } from './submitButton/styles';

interface IProps {
  error: OrNull<string>;
  handleSubmit: Callback<React.FormEvent<HTMLFormElement>, void>;
}

export const SearchForm: React.FC<IProps> = ({ error, handleSubmit }) => {
  return (
    <Content>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Label>Type or paste a link to a Github repo below</Label>
          <Input name='search' placeholder='https://github.com/owner/repo' />
        </Container>
        <SubmitButton type='submit'>Search</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Content>
  );
};
