class Photo < ApplicationRecord
  validates :title, presence: true

  validate :ensure_photo

  has_one_attached :photo

  # render the errors using if flash[:errors] ?
  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
end
