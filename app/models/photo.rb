class Photo < ApplicationRecord
  validates :title, presence: true

  validate :ensure_photo

  has_many_attached :photo

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  # render the errors using if flash[:errors] ?
  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
  
end
