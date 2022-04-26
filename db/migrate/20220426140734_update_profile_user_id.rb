class UpdateProfileUserId < ActiveRecord::Migration[5.2]
  def change
    remove_column :profiles, :user_id, :string
    add_column :profiles, :user_id, :integer, null: false
  end
end