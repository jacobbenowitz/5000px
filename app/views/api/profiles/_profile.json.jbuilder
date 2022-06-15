json.extract! profile, :id, :first_name, :last_name, :website_url, :instagram_url, :lenses, :cameras, :birthday, :city, :country, :about, :gender, :about, :user_id, :featured, :category

#photos
json.photoIds profile.photos.pluck(:id)
json.avatar url_for(profile.avatar)
# json.avatar url_for(profile.avatar.variant(resize: "200x200")) // error?
json.cover url_for(profile.cover)

#follows

json.following do
  json.array! profile.following.each do |follow|
    json.id follow.id
    json.followeeId follow.followee.id
    json.first_name follow.followee.first_name
    json.last_name follow.followee.last_name
    json.avatar url_for(follow.followee.avatar)
    json.following follow.followee.following
    json.followers follow.followee.followers
  end
end
json.followers do
  json.array! profile.followers.each do |follower|
    json.id follower.id
    json.followerId follower.follower.id
    json.first_name follower.follower.first_name
    json.last_name follower.follower.last_name
    json.avatar url_for(follower.follower.avatar)
    json.followers follower.follower.followers
    json.following follower.follower.following
  end
end

#likes
json.likedPhotos profile.liked_photos.pluck(:id)
json.likesReceived profile.likes_received.pluck(:id)
