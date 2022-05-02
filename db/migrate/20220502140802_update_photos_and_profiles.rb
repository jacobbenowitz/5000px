class UpdatePhotosAndProfiles < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :user_id
    add_column :photos, :profile_id, :integer, null: false
    add_column :photos, :location, :string
    add_column :photos, :lens, :string
    add_column :photos, :camera, :string
    add_index :photos, :profile_id
  end
end
