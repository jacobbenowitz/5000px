  json.extract! profile_photo, :id, :profile_id, :photo_type
  debugger
  json.photoUrl url_for(profile_photo.profile_avatar || profile_photo.profile_banner)