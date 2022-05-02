json.user do 
  json.partial! "api/users/user", user: @user
  if @user.profile
    json.profileId @user.profile.id
  end
end

