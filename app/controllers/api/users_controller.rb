class Api::UsersController < ApplicationController

  # new user account
  def create 
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    @photos = @user.photos.order(created_at: :desc)
    render :show
  end

  def index
    @user = User.all
  end

  # edit user account
  # def update
  # end
  
  # delete user account
  # def destroy
  # end

  private

  def user_params
    params.require(:user).permit(
      :username, :email, :password
    )
  end

end