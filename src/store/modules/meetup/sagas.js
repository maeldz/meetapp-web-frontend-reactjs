import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

export function* updateMeetup({ payload }) {
  try {
    const { banner_id, title, description, location, date, id } = payload;

    yield call(api.put, `meetups/${id}`, {
      banner_id,
      title,
      description,
      location,
      date,
    });

    toast.success('Meetup atualizado com sucesso!');

    history.push('/dashboard');
  } catch (err) {
    history.goBack();
    toast.error('Não foi possível editar seu meetup, confira os dados!');
  }
}

export function* addMeetup({ payload }) {
  try {
    const { banner_id, title, description, location, date } = payload;

    yield call(api.post, 'meetups', {
      banner_id,
      title,
      description,
      location,
      date,
    });

    toast.success('Meetup adicionado com sucesso!');

    history.push('/dashboard');
  } catch (err) {
    history.goBack();
    toast.error('Não foi possível adicionar o meetup, confira os dados!');
  }
}

export default all([
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/ADD_MEETUP_REQUEST', addMeetup),
]);
