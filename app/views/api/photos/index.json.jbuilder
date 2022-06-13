json.photoIds do
  json.array! @photos.pluck(:id)
end

# build discover arrays with discover pages's photos
json.popular do 
  popularIds = @photos.map do |photo|
    if photo.featured == 'popular'
      photo.id 
    else
      next
    end
  end
  json.array! popularIds.compact
end

json.fresh do 
  freshIds = @photos.map do |photo|
    if photo.featured == 'fresh'
      photo.id 
    else
      next
    end
  end
  json.array! freshIds.compact
end

json.upcoming do 
  upcomingIds = @photos.map do |photo|
    if photo.featured == 'upcoming'
      photo.id 
    else
      next
    end
  end
  json.array! upcomingIds.compact
end

json.editors do 
  editorsIds = @photos.map do |photo|
    if photo.featured == 'editors'
      photo.id 
    else
      next
    end
  end
  json.array! editorsIds.compact
end

# build category arrays with category's photos
json.minimalism do 
  minimalismIds = @photos.map do |photo|
    if photo.category == 'minimalism'
      photo.id 
    else
      next
    end
  end
  json.array! minimalismIds.compact
end

json.music do 
  musicIds = @photos.map do |photo|
    if photo.category == 'music'
      photo.id 
    else
      next
    end
  end
  json.array! musicIds.compact
end

json.abstract do 
  abstractIds = @photos.map do |photo|
    if photo.category == 'abstract'
      photo.id 
    else
      next
    end
  end
  json.array! abstractIds.compact
end

json.animals do 
  animalsIds = @photos.map do |photo|
    if photo.category == 'animals'
      photo.id 
    else
      next
    end
  end
  json.array! animalsIds.compact
end

json.chocolate do 
  chocolateIds = @photos.map do |photo|
    if photo.category == 'chocolate'
      photo.id 
    else
      next
    end
  end
  json.array! chocolateIds.compact
end

json.sports do 
  sportsIds = @photos.map do |photo|
    if photo.category == 'sports'
      photo.id 
    else
      next
    end
  end
  json.array! sportsIds.compact
end