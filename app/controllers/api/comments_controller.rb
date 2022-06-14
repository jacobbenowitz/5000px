class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else 
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
  end

  def index
    @comments = Comment.all
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :photo_id, :profile_id, :body)
  end
end
