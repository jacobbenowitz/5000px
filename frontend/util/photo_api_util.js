export const fetchPhoto = photoId => {
  return $.ajax({
      method: 'GET',
      url: `/api/photos/${photoId}`
    })
}

export const deletePhoto = photoId => {
  return $.ajax({
      method: 'DELETE',
      url: `/api/photos/${photoId}`
    })
}

export const fetchPhotos = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/photos'
    })
}

export const uploadPhoto = formData => {
  return $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: formData,
    contentType: false,
    processData: false
  })
}

export const updatePhoto = formData => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/photos/${formData.id}`,
    data: formData,
    contentType: false,
    processData: false
  })
}