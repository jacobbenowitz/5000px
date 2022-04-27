  json.extract! profile_photo, :id, :profile_id, :type
  json.photoUrl url_for(profile_photo.photo)