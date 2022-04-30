
json.profile do
  json.partial! "api/profiles/profile", profile: @profile
  debugger
  json.photoIds @user.photos.pluck(:id)
end