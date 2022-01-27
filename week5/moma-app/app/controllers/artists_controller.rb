class ArtistsController < ApplicationController

  def new
    @artist = Artist.new
  end

  def create
    # raise 'hell'
    # render json: params

    # Artist.create(
    #   name: params[:artist][:name],
    #   nationality: params[:artist][:nationality],
    # )

    # ForbiddenAttributesError - Rails prevents
    # you from just passing ALL the form contents
    # directly into the create() - because anyone
    # can add form fields from the frontend
    # (i.e. via dev tools)
    # Artist.create params[:artist]

    # Instead, we have create a 'bouncer'/doorman
    # or 'door list' of field names that are
    # allowed through from the form
    # This door list is called "strong params"
    # in Rails - we have to create it in the
    # 'private' section of the controller, so it
    # can't be mistaken for a route action
    Artist.create artist_params

    redirect_to artists_path  # back to index


  end

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]
  end

  def edit
    @artist = Artist.find params[:id]
  end

  def update
    # raise 'hell'

    artist = Artist.find params[:id]
    artist.update artist_params

    redirect_to artist_path( params[:id] )
  end

  def destroy
    # raise 'hell'
    Artist.destroy params[:id]
    redirect_to artists_path   # back to index
  end

  # "private" methods in a class are ONLY visible
  # to other methods that are also in the class
  #  - in Rails, a private controller method is
  # one that can be used by the actions (a method
  # that is a handler for a route), but is not
  # itself an action
  private

  def artist_params
    params.require(:artist).permit(:name, :nationality, :dob, :period, :roundness, :image, :bio)
  end  # artist_params()



end  # class ArtistsController
