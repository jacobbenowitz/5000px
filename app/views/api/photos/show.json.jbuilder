json.photo do 
  json.partial! "api/photos/photo", photo: @photo
  json.photoUrl url_for(@photo.photo)
  json.profileId @photo.user.profile.id
end

json.profile do 
  json.partial! "api/profiles/profile", profile: @profile
end

json.user do 
  json.partial! "api/users/user", user: @user
end