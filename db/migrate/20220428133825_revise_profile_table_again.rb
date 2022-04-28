class ReviseProfileTableAgain < ActiveRecord::Migration[5.2]
  def change
    change_column :profiles, :profile_avatar, :string
    change_column :profiles, :profile_banner, :string
  end
end
