class UpdatePhotosWithTaken < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :width
    remove_column :photos, :height
    add_column :photos, :taken, :date
  end
end
