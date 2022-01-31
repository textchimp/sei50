class MixtapesController < ApplicationController

  before_action :check_if_logged_in, except: [:index, :show]

  def new
    @mixtape = Mixtape.new
  end

  def create
    mixtape = Mixtape.create mixtape_params

    mixtape.user_id = @current_user.id  # OR: mixtape.user = @current_user
    mixtape.save  # NOT saved to the DB until we do this!

    redirect_to mixtapes_path
  end

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end


  private

  def mixtape_params
    params.require(:mixtape).permit(:name, :image)
  end

end
