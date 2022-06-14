# == Schema Information
#
# Table name: profiles
#
#  id            :bigint           not null, primary key
#  first_name    :string
#  last_name     :string
#  website_url   :string
#  instagram_url :string
#  lenses        :string
#  cameras       :string
#  birthday      :date
#  city          :string
#  country       :string
#  about         :text
#  gender        :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer          not null
#  featured      :boolean
#  category      :string
#
require 'test_helper'

class ProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
