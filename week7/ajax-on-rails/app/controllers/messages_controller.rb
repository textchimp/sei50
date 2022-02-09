class MessagesController < ApplicationController

  def index
    render json: Message.all
  end

  def show
    render json: Message.find( params[:id] )
  end

  def search
    render json: Message.where('content ILIKE ?', "%#{ params[:query] }%")
  end


end
