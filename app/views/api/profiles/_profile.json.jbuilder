json.extract! profile, :id, :first_name, :last_name, :website_url, :instagram_url, :lenses, :cameras, :birthday, :city, :country, :about, :gender, :about, :user_id, :featured, :category

#photos
json.photoIds profile.photos.pluck(:id)

json.avatar url_for(profile.avatar) if profile.avatar.attached?
json.cover url_for(profile.cover) if profile.cover.attached?

#follows
json.following profile.following.pluck(:id)
json.followers profile.followers.pluck(:id)

#likes
json.likedPhotos profile.liked_photos.pluck(:id)
json.likesReceived profile.likes_received.pluck(:id)
