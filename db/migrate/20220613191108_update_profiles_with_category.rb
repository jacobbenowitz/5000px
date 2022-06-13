class UpdateProfilesWithCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :category, :string
  end
end
