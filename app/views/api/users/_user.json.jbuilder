json.extract! user, :id, :username, :email
json.profileId user.profile.id if user.profile