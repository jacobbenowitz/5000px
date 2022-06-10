
json.extract! photo, :id, :title, :description, :profile_id, :location, :lens, :camera, :width, :height, :category, :created_at, :updated_at
json.photoUrl url_for(photo.photo)

## todo: remove width from above
json.testWidth photo.width
json.testHeight photo.height
json.thumbnailUrl url_for(photo.photo.variant(resize: "500x500"))

json.userId photo.profile.user_id
json.username photo.profile.user.username
json.profileName photo.profile.first_name + " " + photo.profile.last_name
json.showLink "/photos/#{photo.id}"
json.likeIds photo.likes.pluck(:id)