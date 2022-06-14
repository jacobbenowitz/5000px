class Comment < ApplicationRecord
  belongs_to :profile,
    foreign_key: :profile_id,
    class_name: :Profile

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo
end