# == Schema Information
#
# Table name: photos
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  profile_id  :integer          not null
#  location    :string
#  lens        :string
#  camera      :string
#
class Photo < ApplicationRecord

  validate :ensure_photo

  has_one_attached :photo
  
  version :thumb do
    process :resize_to_fit => [50, 50]
  end

  belongs_to :profile,
    foreign_key: :profile_id,
    class_name: :Profile

  # render the errors using if flash[:errors] ?
  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
  
end
