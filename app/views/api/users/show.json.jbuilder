json.user do 
  # debugger
  json.partial! "api/users/user", user: @user
end

# if user.profile 
#   json.profileId user.profile.id
# end
# json.profile do
#   json.partial! "api/profiles/profile", profile: @user.profile
# end

