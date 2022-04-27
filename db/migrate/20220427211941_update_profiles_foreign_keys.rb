class UpdateProfilesForeignKeys < ActiveRecord::Migration[5.2]
  def change
    remove_column :profiles, :profile_avatar
    remove_column :profiles, :profile_banner
    add_column :profiles, :profile_avatar, :integer
    add_column :profiles, :profile_banner, :integer
    add_index :profiles, :profile_avatar
    add_index :profiles, :profile_banner
  end
end
