class DropProfilePhotosTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :profile_photos do 
      t.string "photo_type", null: false
      t.integer "profile_id", null: false
    end
  end
end
