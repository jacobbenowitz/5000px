json.extract! profile, :id, :first_name, :last_name, :website_url, :instagram_url, :lenses, :cameras, :birthday, :city, :country, :about, :gender, :about, :user_id, :featured, :category

#photos
json.photoIds profile.photos.pluck(:id)
json.avatar url_for(profile.avatar)
# json.avatar url_for(profile.avatar.variant(resize: "200x200")) // error?
json.cover url_for(profile.cover)

#follows
json.following do
  profile.following.pluck(:followee_id)
end

json.followers profile.followers.pluck(:follower_id)

#likes
json.likedPhotos profile.liked_photos.pluck(:id)
