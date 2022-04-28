json.user do 
  json.partial! "api/users/user", user: @user
end

json.profile do
  json.partial! "api/profiles/profile", profile: @user.profile
end