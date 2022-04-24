class Api::ProfilesController < ApplicationController

  def create
    @profile = Profile.new(profile_params)

    if @profile.save
      render :show
    else
      render json: @profile.errors.full_messages, status: 401
    end
  end

  # def show
  # end

  
  private

  def profile_params
    params.require(:profile).permit(
      :first_name, :last_name, :profile_avatar, :profile_banner, :website_url, :instagram_url, :lenses, :cameras, :birthday, :city, :country, :about, :gender, :about, :user_id
    )
  end

end