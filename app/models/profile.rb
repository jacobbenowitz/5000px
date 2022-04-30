class Profile < ApplicationRecord

  validates :user_id, presence: true
  validates :gender, inclusion: { in: ['Male', 'Female', 'Not specified']}


  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  # has_many :profile_photos,
  #   foreign_key: :profile_id,
  #   class_name: :ProfilePhoto
  
end
