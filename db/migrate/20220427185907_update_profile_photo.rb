class UpdateProfilePhoto < ActiveRecord::Migration[5.2]
  def change
    remove_column :profile_photos, :user_id
    add_column :profile_photos, :profile_id, :integer, null: false
    add_index :profile_photos, :profile_id
  end
end
