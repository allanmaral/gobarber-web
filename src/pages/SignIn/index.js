import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('*Insira um e-email válido')
    .required('*O e-mail é obrigatório'),
  password: Yup.string().required('*A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber Logo" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" id="email" type="email" placeholder="Seu email" />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />
          <button type="submit">Acessar</button>
          <Link to="signup">Criar conta gratuita</Link>
        </Form>
      </Content>
    </Container>
  );
}
