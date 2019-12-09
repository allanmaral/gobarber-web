import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import logo from '../../assets/images/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('*O nome é obrigatório'),
  email: Yup.string()
    .email('*Insira um e-email válido')
    .required('*O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, '*A senha deve ter no mínimo 6 caracteres')
    .required('*A senha é obrigatória'),
});

export default function SignUp() {
  const handleSubmit = data => {
    console.tron.log(data);
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber Logo" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nome completo" />
          <Input name="email" type="email" placeholder="Seu email" />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />
          <button type="submit">Criar conta</button>
          <Link to="/">Já tenho login</Link>
        </Form>
      </Content>
    </Container>
  );
}
