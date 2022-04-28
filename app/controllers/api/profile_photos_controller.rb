class Api::ProfilePhotosController < ApplicationController 

  def create
    profile_photo = ProfilePhoto.new(profile_photo_params)
    # debugger
    if profile_photo.save
      render json: {
        message: "Successfully uploaded", 
        id: profile_photo.id,
        profileId: profile_photo.profile_id
      }
    else
      render json: profile_photo.errors.full_messages
    end
  end


  def show
    @profile_photo = ProfilePhoto.with_attached_profile_avatar.find_by(profile_id: params[:id])
    # @profile_photo = ProfilePhoto.find_by(profile_id: params[:id])
    debugger
    render :show
  end

  private

  def profile_photo_params
    params.require(:profile_photo).permit(:profile_avatar, :profile_banner, :profile_id, :photo_type)
  end

end