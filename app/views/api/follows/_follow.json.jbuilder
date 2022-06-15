json.extract! follow, :id, :followee_id, :follower_id, :created_at, :updated_at

json.followee do
  json.followeeId follow.followee.id
  json.first_name follow.followee.first_name
  json.last_name follow.followee.last_name
  json.avatar url_for(follow.followee.avatar)
  json.following follow.followee.following.pluck(:id)
  json.followers follow.followee.followers.pluck(:id)
end

json.follower do
  json.followerId follow.follower.id
  json.first_name follow.follower.first_name
  json.last_name follow.follower.last_name
  json.avatar url_for(follow.follower.avatar)
  json.following follow.follower.following.pluck(:id)
  json.followers follow.follower.followers.pluck(:id)
end

