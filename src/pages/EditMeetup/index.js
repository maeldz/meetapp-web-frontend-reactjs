import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdArrowBack } from 'react-icons/md';
import { parseISO } from 'date-fns';
import * as Yup from 'yup';

import { Container } from './styles';
import { updateMeetupRequest } from '~/store/modules/meetup/actions';
import history from '~/services/history';

import DatePicker from './DatePicker';
import BannerInput from './BannerInput';

export default function AddMeetup({ location }) {
  let { meetup } = location.state;

  meetup = { ...meetup, date: parseISO(meetup.date) };

  const dispatch = useDispatch();

  function handleSubmit(data) {
    const dataWithId = {
      ...data,
      id: meetup.id,
    };
    dispatch(updateMeetupRequest(dataWithId));
  }

  const schema = Yup.object().shape({
    banner_id: Yup.string().required('O banner do meetup é obrigatório'),
    title: Yup.string().required('O título do meetup é obrigatório'),
    description: Yup.string()
      .max(1900, 'O máximo de caracteres permitidos é 1900')
      .required('A descrição do meetup é obrigatória'),
    date: Yup.string().required('A data do meetup é obrigatória'),
    location: Yup.string().required('A localização do meetup é obrigatória'),
  });

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input
          maxLength="1900"
          multiline
          name="description"
          placeholder="Descrição completa"
        />
        <DatePicker />
        <Input name="location" placeholder="Localização" />

        <div>
          <button
            id="back"
            type="button"
            onClick={() => {
              history.goBack();
            }}
          >
            <MdArrowBack size={24} color={'#fff'} />
            Voltar
          </button>
          <button id="save" type="submit">
            <MdDone size={24} color={'#fff'} />
            Salvar meetup
          </button>
        </div>
      </Form>
    </Container>
  );
}
