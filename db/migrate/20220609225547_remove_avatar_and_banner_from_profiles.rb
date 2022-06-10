class RemoveAvatarAndBannerFromProfiles < ActiveRecord::Migration[5.2]
  def change
    remove_column :profiles, :profile_avatar
    remove_column :profiles, :profile_banner
  end
end
