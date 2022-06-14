class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :profile_id, null: false
      t.integer :photo_id, null: false
      t.string :body, null: false

      t.timestamps
    end
    add_index :comments, :profile_id
    add_index :comments, :photo_id
  end
end
