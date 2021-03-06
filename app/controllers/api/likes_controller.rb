class Api::LikesController < ApplicationController

  def create 
    @like = Like.new(like_params)
    if @like.save
      render :show
      # render json: {message: ["Like saved!"]}
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def index
    @likes = Like.all
  end

  def show 
    @like = Like.find_by(id: params[:id])
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    
    if @like.destroy
      render :show
      # render json: {message: ["Like removed"]}
    else
      render json: @like.errors.full_messages, status: 422
    end
  end


  private

  def like_params
    params.require(:like).permit(:photo_id, :liker_id, :id)
  end

end
