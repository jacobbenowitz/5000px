export const fetchPhoto = photoId => {
  return ($.ajax({
    method: 'GET',
    url: `/api/photos/${photoId}`
  })
  )
}

export const fetchPhotos = () => {
  debugger
  return ($.ajax({
    method: 'GET',
    url: '/api/photos'
  })
  )
}

