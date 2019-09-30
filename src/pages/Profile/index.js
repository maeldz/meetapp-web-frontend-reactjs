import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdDone } from 'react-icons/md';
import * as Yup from 'yup';

import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Digite um endereço de email válido')
      .required('O email é obrigatório'),
    oldPassword: Yup.string(),
    password: Yup.string()
    .when('oldPassword', (oldPassword, field) =>
      oldPassword
        ? field
            .min(6, 'A senha precisa conter no mínimo 6 caracteres')
            .required('Digite a nova senha e confirme')
        : field,
    ),
    confirmPassword: Yup.string().when('password', (password, field) =>
      password
        ? field
            .required('A confirmação de senha é obrigatória')
            .oneOf([Yup.ref('password')], 'As senhas não correspondem')
        : field,
    ),
  });

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <div>
          <button type="submit">
            <MdDone size={24} color={'#fff'} />
            Salvar perfil
          </button>
        </div>
      </Form>
    </Container>
  );
}
