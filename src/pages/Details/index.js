import React from 'react';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';

export default function Details({ location }) {
  const { meetup } = location.state;

  const formattedDate = format(
    parseISO(meetup.date),
    "dd 'de' MMMM', às' H'h'",
    {
      locale: ptBR,
    },
  );

  async function handleCancel(id) {
    try {
      await api.delete(`meetups/${id}`);

      history.push('/dashboard');

      toast.success('Meetup cancelado com sucesso');
    } catch (err) {
      history.push('/dashboard');

      toast.error('Este meetup não pode ser cancelado');
    }
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <button id="edit" onClick={() => history.push('/edit', { meetup })}>
            <MdEdit size={20} color={'#fff'} />
            Editar
          </button>
          <button id="cancel" onClick={() => handleCancel(meetup.id)}>
            <MdDeleteForever size={20} color={'#fff'} />
            Cancelar
          </button>
        </div>
      </header>
      <img src={meetup.banner.url} alt={meetup.title} />
      <article>{meetup.description}</article>
      <div>
        <MdEvent size={20} color={'rgba(255, 255, 255, 0.6)'} />
        <span id="date">{formattedDate}</span>
        <MdPlace size={20} color={'rgba(255, 255, 255, 0.6)'} />
        <span id="location">{meetup.location}</span>
      </div>
    </Container>
  );
}

Details.propTypes = {
  location: PropTypes.object,
};

Details.defaultProps = {
  location: {},
};
