import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FaCircleNotch } from 'react-icons/fa';

import { SubmitButton } from './styles';
import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Digite um endereço de email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa conter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Digite seu nome completo" />
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <SubmitButton loading={loading}>
          {loading ? <FaCircleNotch color="#fff" size={18} /> : 'Criar conta'}
        </SubmitButton>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
