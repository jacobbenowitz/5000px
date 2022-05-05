# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Follow < ApplicationRecord

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :Profile

  belongs_to :followee,
    foreign_key: :followee_id,
    class_name: :Profile
end
