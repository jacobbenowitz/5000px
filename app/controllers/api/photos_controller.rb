class Api::PhotosController < ApplicationController


  def create 
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
      # render json: {message: ["Successfully uploaded!"]}
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def index
    @photos = Photo.all
  end

  def update
    photo = Photo.find_by(id: params[:id])
    if photo.update(photo_params)
      render json: {message: ["Successfully updated!"]}
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find_by(id: params[:id])
  end

  def destroy 
    photo = Photo.find_by(id: params[:id])
    if photo.destroy
      render json: {message: ["Photo successfully deleted."]}
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  private

  def photo_params
    params.require(:photo).permit(
      :photo, :title, :description, :lens, :camera, :location, :category, :taken, :featured, :profile_id)
  end
end
