class Api::FollowsController < ApplicationController
  def create
    follow = Follow.new(follow_params)
    if follow.save
      render json: {message: ["follow saved!"]}
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  def index
    @follows = Follow.all
  end

  def show 
    @follow = Follow.find_by(id: params[:id])
  end

  def destroy
    follow = Follow.find_by(id: params[:id])
    
    if Follow.destroy
      render json: {message: ["Successfully unfollowed"]}
    else
      render json: follow.errors.full_messages
    end
  end


  private

  def follow_params
    params.require(:follow).permit(:followee_id, :follower_id)
  end
end
