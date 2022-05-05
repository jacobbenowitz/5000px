@likes.each do |like|
  json.set! like.id do
    json.partial! "likes", like: like
  end
end