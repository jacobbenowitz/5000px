class UpdateProfilesWithFeatured < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :featured, :boolean
    Profile.find_each do |profile|
      profile.featured = true
      profile.save!
    end
  end
end
