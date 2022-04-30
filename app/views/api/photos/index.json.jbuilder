@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'photo', photo: photo
    json.photoUrl url_for(photo.photo)
  end
end