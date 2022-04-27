class ImagesController < ApplicationController

  def index
    render :show_home_feed_images
    # render :multiple_images_form
  end

  def show 
  end

  def update
    images = Images.all.first
    if params[:images]
      images.update(images_params)

      images.hero_image.attach(params[:images][:hero_image]) if params [:images][:hero_image]
      
      images.user_profile_image.attach(params[:images][:user_profile_image]) if params[:images][:user_profile_image]

      images.user_cover_image.attach(params[:images][:user_cover_image]) if params[:images][:user_cover_image]

      images.home_feed_images.attach(params[:images][:home_feed_images]) if params[:images][:home_feed_images]

      images.editors_choice_images.attach(params[:images][:editors_choice_images]) if params[:images][:editors_choice_images]

      images.discover_images.attach(params[:images][:discover_images]) if params[:images][:discover_images]

      images.user_images.attach(params[:images][:user_images]) if params[:images][:user_images]

  end


  private

  def images_params
    params.require(:images).permit(:hero_image, :user_profile_image, :user_cover_image, :home_feed_images, :editors_choice_images, :discover_images, :user_images)
  end

end