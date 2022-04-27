class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title
      t.text :description
      t.integer :user_id

      t.timestamps
    end
    add_index :photos, :user_id
  end
end
