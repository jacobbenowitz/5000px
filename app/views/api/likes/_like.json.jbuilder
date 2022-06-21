json.extract! like, :id, :liker_id, :photo_id, :created_at, :updated_at
# debugger
json.first_name like.liker.first_name
json.last_name like.liker.last_name
json.username like.liker.user.username
json.avatar url_for(like.liker.avatar) if like.liker.avatar.attached?
json.followers like.liker.followers