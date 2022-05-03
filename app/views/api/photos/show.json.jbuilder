json.photo do 
  json.partial! "api/photos/photo", photo: @photo
  json.userId @photo.profile.user.id
end