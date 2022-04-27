class UpdateProfilePhotoType < ActiveRecord::Migration[5.2]
  def change
    rename_column :profile_photos, :type, :photo_type
  end
end
