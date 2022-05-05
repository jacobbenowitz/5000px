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
#  width       :integer
#  height      :integer
#
class Photo < ApplicationRecord

  validate :ensure_photo

  has_one_attached :photo

  belongs_to :profile,
    foreign_key: :profile_id,
    class_name: :Profile

  has_many :likes,
    foreign_key: :photo_id,
    class_name: :Like

  # render the errors using if flash[:errors] ?
  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
  
end
