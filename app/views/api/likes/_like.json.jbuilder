json.extract! like, :id, :liker_id, :photo_id, :created_at, :updated_at

json.first_name like.liker.first_name
json.last_name like.liker.last_name
json.avatar url_for(like.liker.avatar)
json.followers like.liker.followers