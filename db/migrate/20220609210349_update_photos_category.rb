class UpdatePhotosCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :category, :string
  end
end
