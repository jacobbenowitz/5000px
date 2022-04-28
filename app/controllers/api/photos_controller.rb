class Api::PhotosController < ApplicationController


  def create 
    photo = Photo.new(photo_params)
    # debugger
    if photo.save
      render json: {message: "Successfully uploaded"}
    else
      render json: photo.errors.full_messages, status: 422
    end

  end

  def index
    @photos = Photo.all
    render :index
  end


  def show
    @photo = Photo.find_by(id: params[:id])
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :photo)
  end
end
