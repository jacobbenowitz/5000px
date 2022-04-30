
json.profile do
  json.partial! "api/profiles/profile", profile: @profile
  json.photoIds @user.photos.pluck(:id)
end