export const createProfile = profile => (
  $.ajax({
    method: 'POST',
    url: '/api/profiles',
    data: { profile }
  })
);

export const fetchProfile = profileId => (
  $.ajax({
    method: 'GET',
    url: `/api/profiles/${profileId}`
  })
);

