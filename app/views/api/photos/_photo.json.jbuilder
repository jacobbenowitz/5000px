
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
    json.partial! "api/likes/like", like: like
  end
end

json.comments do 
  json.array! photo.comments do |comment|
    json.partial! "api/comments/comment", comment: comment
  end
end