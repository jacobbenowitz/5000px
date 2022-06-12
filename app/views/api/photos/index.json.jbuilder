json.photoIds do
  json.array! @photos.pluck(:id)
end

# json.all do
#   @photos.each do |photo|
#     json.set! photo.id do
#       json.partial! 'photo', photo: photo
#     end
#   end
# end

# # build discover arrays with discover pages's photos
# json.popular do 
#   json.array! @photos.each do |photo|
#     next if photo.featured != 'popular'
#     json.partial! 'photo', photo: photo
#   end
# end

# json.fresh do 
#   json.array! @photos.each do |photo|
#     next if photo.featured != 'fresh'
#     json.partial! 'photo', photo: photo
#   end
# end

# json.upcoming do 
#   json.array! @photos.each do |photo|
#     next if photo.featured != 'upcoming'
#     json.partial! 'photo', photo: photo
#   end
# end

# json.editors do 
#   json.array! @photos.each do |photo|
#     next if photo.featured != 'editors'
#     json.partial! 'photo', photo: photo
#   end
# end

# # build category arrays with category's photos
# json.minimalism do 
#   json.array! @photos.each do |photo|
#     next if photo.category != 'minimalism'
#     json.partial! 'photo', photo: photo
#   end
# end

# json.music do 
#   json.array! @photos.each do |photo|
#     next if photo.category != 'music'
#     json.partial! 'photo', photo: photo
#   end
# end

# json.abstract do 
#   json.array! @photos.each do |photo|
#     next if photo.category != 'abstract'
#     json.partial! 'photo', photo: photo
#   end
# end

# json.animals do 
#   json.array! @photos.each do |photo|
#     next if photo.category != 'animals'
#     json.partial! 'photo', photo: photo
#   end
# end

# json.chocolate do 
#   json.array! @photos.each do |photo|
#     next if photo.category != 'chocolate'
#     json.partial! 'photo', photo: photo
#   end
# end

# json.sports do 
#   json.array! @photos.each do |photo|
#     next if photo.category != 'sports'
#     json.partial! 'photo', photo: photo
#   end
# end