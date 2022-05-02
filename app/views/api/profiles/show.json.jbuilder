json.partial! "api/profiles/profile", profile: @profile
json.photoIds @profile.photos.pluck(:id)