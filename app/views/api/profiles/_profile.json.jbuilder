json.extract! profile, :id, :first_name, :last_name, :website_url, :instagram_url, :lenses, :cameras, :birthday, :city, :country, :about, :gender, :about, :user_id
json.photoIds profile.photos.pluck(:id)
json.avatar url_for(profile.avatar)
json.cover url_for(profile.cover)
