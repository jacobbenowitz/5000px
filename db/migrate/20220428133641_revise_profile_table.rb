class ReviseProfileTable < ActiveRecord::Migration[5.2]
  def change
    change_column :profiles, :profile_avatar, :integer
    change_column :profiles, :profile_banner, :integer
  end
end
