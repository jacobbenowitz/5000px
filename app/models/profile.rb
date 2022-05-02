# == Schema Information
#
# Table name: profiles
#
#  id             :bigint           not null, primary key
#  first_name     :string
#  last_name      :string
#  website_url    :string
#  instagram_url  :string
#  lenses         :string
#  cameras        :string
#  birthday       :date
#  city           :string
#  country        :string
#  about          :text
#  gender         :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer          not null
#  profile_avatar :string
#  profile_banner :string
#
class Profile < ApplicationRecord

  validates :user_id, presence: true
  validates :gender, inclusion: { in: ['Male', 'Female', 'Not specified']}

  has_one_attached :cover
  has_one_attached :avatar

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :photos,
    foreign_key: :profile_id,
    class_name: :Photo,
    dependent: :destroy
  
end
