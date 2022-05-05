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
require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
