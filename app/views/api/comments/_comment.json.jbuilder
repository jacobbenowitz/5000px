json.extract! comment, :id, :profile_id, :photo_id, :body, :created_at, :updated_at

json.profile do
  json.name comment.profile.first_name + ' ' + comment.profile.last_name
  json.username comment.profile.user.username
  json.avatar url_for(comment.profile.avatar)
end