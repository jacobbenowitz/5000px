json.extract! photo, :id, :title, :description, :user_id, :created_at
json.profileId photo.user.profile.id
json.photoUrl url_for(photo.photo)