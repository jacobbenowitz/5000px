class ProfilePhoto < ApplicationRecord 

  validates :profile_id, presence: true
  
  validate :ensure_photo

  has_one_attached :profile_photo
  has_one_attached :cover_photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

end