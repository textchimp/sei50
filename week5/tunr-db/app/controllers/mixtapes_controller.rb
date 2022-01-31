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
    @mixtape = Mixtape.find params[:id]

    # Check that the user is allowed to edit this Mixtape
    # (i.e. they created it) - and if not, show them the door
    redirect_to login_path  unless @mixtape.user_id == @current_user.id
  end


  def update

    @mixtape = Mixtape.find params[:id]


    # Don't perform the edit on the item (i.e. don't change the DB)
    # if the logged in user is not the owner
    if @mixtape.user_id != @current_user.id
      redirect_to login_path  # THIS IS NOT ENOUGH - rest of action still tries to run
      return  # this prevents the update below from happening
    end

    # redirect_to login_path and return unless @mixtape.user_id == @current_user.id

    # Check if the update worked - it might fail due to the same validation errors
    # as the create
    if @mixtape.update mixtape_params
      redirect_to mixtape_path(@mixtape)
    else
      render :edit  # show the edit form again, pre-filled (and also with @mixtape.errors)
    end


  end # update



  def destroy
  end


  private

  def mixtape_params
    params.require(:mixtape).permit(:name, :image)
  end

end
