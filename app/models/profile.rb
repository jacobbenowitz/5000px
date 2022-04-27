class Profile < ApplicationRecord

  validates :user_id, presence: true
  validates :gender, inclusion: { in: ['Male', 'Female', 'Not specified']}

  has_one_attached :profile_photo
  has_one_attached :cover_photo

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  
end
