class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :profile_avatar
      t.string :profile_banner
      t.string :website_url
      t.string :instagram_url
      t.string :lenses
      t.string :cameras
      t.date :birthday
      t.string :city
      t.string :country
      t.text :about
      t.string :gender
      t.string :user_id, null: false

      t.timestamps
    end
    add_index :profiles, :user_id
  end
end
