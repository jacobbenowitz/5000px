class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  # login
  def create
    @user = User.find_by_credentials(
      params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      # redirect_to ...
    else
      render json: ['Invalid username or password combination'], status: 401
    end
  end

  #logout
  def destroy
    @user = current_user
    if @user
      logout!
      render :new
    else
      render json: ['No user signed in'], status: 404
    end
  end


end