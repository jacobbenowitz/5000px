export const fetchPhoto = photoId => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/photos/${photoId}`
    })
  )
}

export const fetchPhotos = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/photos'
    })
  )
}

export const uploadPhoto = formData => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/photos',
      data: formData,
      contentType: false,
      processData: false
    }))
}
