class UpdateProfileUserIdIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :profiles, :user_id, unique: true
  end
end
