class Api::PhotosController < ApplicationController

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
    params.require(:photo).permit(:title, :description)
  end
end
