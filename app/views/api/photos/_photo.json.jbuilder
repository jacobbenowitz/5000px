
json.extract! photo, :id, :title, :description, :profile_id, :location, :lens, :camera, :category, :featured, :taken, :created_at, :updated_at

json.userId photo.profile.user_id
json.username photo.profile.user.username
json.profileName photo.profile.first_name + " " + photo.profile.last_name
json.showLink "/photos/#{photo.id}"

json.width photo.width
json.height photo.height

json.photoUrl url_for(photo.photo)
json.thumbnailUrl url_for(photo.photo.variant(resize: "500x500"))

json.likes do
  json.array! photo.likes do |like|
    json.id like.id
    json.liker like.liker.id
    json.first_name like.liker.first_name
    json.last_name like.liker.last_name
  end
end