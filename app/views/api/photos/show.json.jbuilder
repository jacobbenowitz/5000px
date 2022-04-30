json.photo do 
  json.partial! "api/photos/photo", photo: @photo
end

json.profile do 
  json.partial! "api/profiles/profile", profile: @profile
end

json.user do 
  json.partial! "api/users/user", user: @user
end