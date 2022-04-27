json.array! @photos do |photo|
  json.partial! "api/users/user", user: @user
  json.photoUrl url_for(photo.photo)
end