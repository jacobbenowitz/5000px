class UpdatePhotosFeatured < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :featured, :string
  end
end
