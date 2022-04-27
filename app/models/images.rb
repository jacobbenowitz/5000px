class Images < ApplicationRecord

  has_one_attached :hero_image
  has_many_attached :user_profile_image
  has_many_attached :user_cover_image
  has_many_attached :home_feed_images
  has_many_attached :editors_choice_images
  has_many_attached :discover_images
  has_many_attached :user_images

end