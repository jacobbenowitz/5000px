# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo
    
  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :Profile
  
end
