include CarrierWave::MiniMagick

json.extract! photo, :id, :title, :description, :profile_id, :location, :lens, :camera, :width, :height, :created_at, :updated_at
json.photoUrl url_for(photo.photo)
# how to get a different size?
# json.thumbnailUrl url_for(photo.photo.variant(resize_to_fit: [500, 500]))
json.thumbnailUrl url_for(photo.photo)
json.userId photo.profile.user.id
json.username photo.profile.user.username
json.profileName photo.profile.first_name + " " + photo.profile.last_name
json.showLink "/photos/#{photo.id}"