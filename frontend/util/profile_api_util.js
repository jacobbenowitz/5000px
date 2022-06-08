export const fetchProfiles = () => (
  $.ajax({
    method: 'GET',
    url: 'api/profiles'
  })
)

export const fetchProfile = profileId => {
  return $.ajax({
    method: 'GET',
    url: `api/profiles/${profileId}`
  })
}

export const createProfile = profile => {
  return $.ajax({
    method: 'POST',
    url: 'api/profiles',
    data: { profile }
  })
};

export const updateProfile = profile => {
  return $.ajax({
    method: 'PATCH',
    url: `api/profiles/${profile.id}`,
    data: { profile }
  })
}

export const updateProfilePhoto = (formData, profileId) => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `api/profiles/${profileId}`,
    data: formData,
    contentType: false,
    processData: false
  })
}

export const deleteProfile = profileId => (
  $.ajax({
    method: 'DELETE',
    url: `api/profiles/${profileId}`
  })
);

