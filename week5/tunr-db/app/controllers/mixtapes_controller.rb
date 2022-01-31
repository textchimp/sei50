class MixtapesController < ApplicationController

  before_action :check_if_logged_in, except: [:index, :show]

  def new
    @mixtape = Mixtape.new
  end

  def create
    # mixtape = Mixtape.create mixtape_params
    # mixtape.user_id = @current_user.id  # OR: mixtape.user = @current_user
    # mixtape.save  # NOT saved to the DB until we do this!

    @mixtape = Mixtape.new mixtape_params
    @mixtape.user_id = @current_user.id
    @mixtape.save

    # Did the above save work, or did it fail due to a validation error?
    if @mixtape.persisted?
      # all good
      redirect_to mixtapes_path
    else
      # redirect_to new_mixtape_path # this empties the form!

      # We can render the template of some OTHER action here
      # In this case we are in :create, but we are asking to render
      # the :new template
      # This will provide the template with the already-filled out
      # form fields, so the user doesn't have to type out all the
      # correct ones again
      render :new
    end


  end # create()

  def index
    @mixtapes = Mixtape.all
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
