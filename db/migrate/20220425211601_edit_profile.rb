class EditProfile < ActiveRecord::Migration[5.2]
  def change
    change_column_null :profiles, :first_name, true
    change_column_null :profiles, :last_name, true
  end
end
