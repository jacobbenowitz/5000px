export const fetchProfilePhoto = profileId => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/profile_photos/${profileId}`
    })
  )
}

export const uploadProfilePhoto = formData => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/profile_photos',
      data: formData,
      contentType: false,
      processData: false
    }))
}
