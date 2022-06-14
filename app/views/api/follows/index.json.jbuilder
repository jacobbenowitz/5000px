json.all do
  @follows.each do |follow|
    json.set! follow.id do
      json.partial! "api/follows/follow", follow: follow
    end
  end
end

json.currentUser do
  json.follows do 
    json.array! current_profile.followers do 
      json.partial! "api/follows/follow", follow: follow
    end
  end
  json.followers do 
    json.array! current_profile.followers do
      json.partial! "api/follows/follow", follow: follow
    end
  end
end