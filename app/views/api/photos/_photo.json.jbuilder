json.extract! photo, :id, :title, :description, :profile_id, :location, :lens, :camera, :width, :height, :created_at, :updated_at
json.photoUrl url_for(photo.photo)