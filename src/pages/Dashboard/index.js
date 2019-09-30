import React, { useEffect, useState } from 'react';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import { Content, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`organizing?page=${page}`);

      setMeetups(response.data.meetups);
      setPages(response.data.pages);
    }

    loadMeetup();
  }, [page]);

  function nextPage() {
    setPage(page + 1);
  }

  function prevPage() {
    if (page === 1) return;
    setPage(page - 1);
  }

  return (
    <Content>
      <header>
        <strong>Meus meetups</strong>
        <button onClick={() => history.push('/new')}>
          <MdAddCircleOutline size={24} color={'#fff'} />
          Novo meetup
        </button>
      </header>
      <ul>
        {meetups.map(
          meetup =>
            !meetup.past && (
              <Meetup key={String(meetup.id)}>
                <strong>{meetup.title}</strong>
                <div>
                  <span>{meetup.data}</span>
                  <button onClick={() => history.push('/details', { meetup })}>
                    <MdChevronRight size={24} color={'#fff'} />
                  </button>
                </div>
              </Meetup>
            ),
        )}
        {pages > 1 && (
          <div>
            <button disabled={page === 1} onClick={prevPage}>
              Anterior
            </button>
            <span>Página {page}</span>
            <button disabled={pages === page} onClick={nextPage}>
              Próxima
            </button>
          </div>
        )}
      </ul>
    </Content>
  );
}
