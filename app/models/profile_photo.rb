class ProfilePhoto < ApplicationRecord 

  validates :profile_id, presence: true

  validate :ensure_photo

  has_one_attached :profile_avatar
  has_one_attached :profile_banner

  belongs_to :profile,
    class_name: :Profile,
    foreign_key: :profile_id

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

end