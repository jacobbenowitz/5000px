json.extract! follow, :id, :followee_id, :follower_id, :created_at, :updated_at

json.followee do
  json.followeeId follow.followee.id
  json.first_name follow.followee.first_name
  json.last_name follow.followee.last_name
  json.username follow.followee.user.username
  json.avatar url_for(follow.followee.avatar) if follow.followee.avatar.attached?
  json.following follow.followee.following.pluck(:id)
  json.followers follow.followee.followers.pluck(:id)
end

json.follower do
  json.followerId follow.follower.id
  json.first_name follow.follower.first_name
  json.last_name follow.follower.last_name
  json.username follow.follower.user.username
  json.avatar url_for(follow.follower.avatar) if follow.follower.avatar.attached?
  json.following follow.follower.following.pluck(:id)
  json.followers follow.follower.followers.pluck(:id)
end

