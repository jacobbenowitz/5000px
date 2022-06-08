class Api::ProfilesController < ApplicationController

  def create
    @profile = Profile.new(profile_params)
    @profile.avatar.attach(io: File.open('app/assets/images/person-placeholder-300x300.webp'), filename: 'placeholder-avatar.webp')
    @profile.cover.attach(io: File.open('app/assets/images/placeholder-image.png'), filename: 'vietnam-street.jpg')


    if @profile.save
      render :show
    else
      render json: @profile.errors.full_messages, status: 401
    end
  end

  def show
    @profile = Profile.find(params[:id])
  end

  def index 
    @profiles = Profile.all
  end

  def update
    @profile = Profile.find_by(id: params[:id])

    byebug

    if params[:avatar]
      @profile.avatar.attach(:avatar)
    end

    if params[:cover]
      @profile.cover.attach(:cover)
    end

    if @profile.update(profile_params)
      render :show
    else
      render json: @profile.errors.full_messages, status: 422
    end

  end

  
  private

  def profile_params
    params.require(:profile).permit(
      :first_name, :last_name, :avatar, :cover, :website_url, :instagram_url, :lenses, :cameras, :birthday, :city, :country, :about, :gender, :about, :user_id
    )
  end

end
