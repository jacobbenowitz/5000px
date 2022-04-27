class PhotosController < ApplicationController

  def index
    @photos = Photo.all
    render :index
  end


  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description)
  end
end
