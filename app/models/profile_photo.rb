class ProfilePhoto < ApplicationRecord 

  # validates :profile_id, presence: true

  # validate :ensure_photo

  has_one_attached :profile_avatar
  # has_one_attached :profile_banner

  belongs_to :profile,
    class_name: :Profile,
    foreign_key: :profile_id

  # def ensure_photo
  #   unless self.profile_avatar.attached? || self.profile_banner.attached?
  #     errors[:profile_photo] << "must be attached"
  #   end
  # end

end