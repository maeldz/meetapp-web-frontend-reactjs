export function updateMeetupRequest({
  banner_id,
  title,
  description,
  location,
  date,
  id,
}) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { banner_id, title, description, location, date, id },
  };
}

export function addMeetupRequest({
  banner_id,
  title,
  description,
  location,
  date,
}) {
  return {
    type: '@meetup/ADD_MEETUP_REQUEST',
    payload: { banner_id, title, description, location, date },
  };
}
