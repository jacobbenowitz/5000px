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
#  category    :string
#  featured    :string
#  taken       :date
#
class Photo < ApplicationRecord
  validate :ensure_photo
  # after_commit :save_dimensions_now

  has_one_attached :photo

  belongs_to :profile,
    foreign_key: :profile_id,
    class_name: :Profile

  has_many :likes,
    foreign_key: :photo_id,
    class_name: :Like

  def height
    photo.metadata['height']
  end

  def width
    photo.metadata['width']
  end

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
  # save image height & width after uploading
  # def save_dimensions_now
  #   photo.analyze if photo.attached?
  # end
  
end
