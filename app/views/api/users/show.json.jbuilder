json.user do 
  json.partial! "api/users/user", user: @user
end

if @user.profile 
  json.profile do
    json.partial! "api/profiles/profile", profile: @user.profile
    json.photoIds @user.photos.pluck(:id)
  end
end

