class CreateProfilePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_photos do |t|
      t.string :type, null: false
      t.string :user_id, null: false
    end
    add_index :profile_photos, :user_id
  end
end
