
class PlanetsController < ApplicationController

  # CREATE

  # 1. Blank form
  def new
    # Create an 'empty' form object (not yet saved
    # into the DB; we give this to the 'form_with'
    # template helper tag, and it will JUST KNOW
    # whether to show a 'create' form or an 'edit'
    # form - including what the action URL is, etc
    @planet = Planet.new
  end # new()

  # 2. Form submits here, create planet, redirect
  def create

    # There is an extra level of nesting here in
    # params: the named form fields are within a
    # parent hash, i.e. 'params[:planet][:moons]'
    # - this is because we built our form using the
    # form_with helper, and it creates tags that
    # look like:
    #   <input type="text" name="planet[moons]">

    # TODO: make sure the planet was actually created!
    # i.e. validation
    Planet.create(
      name: params[:planet][:name],
      mass: params[:planet][:mass],
      orbit: params[:planet][:orbit],
      moons: params[:planet][:moons],
      image_url: params[:planet][:image_url]
    )


    # 'create' does not show its own template due to
    # issues around reloading a page reached via a
    # form POST submit (i.e. duplicating the create)
    # ... instead we redirect somewhere else

    redirect_to planets_path # i.e. index, /planets

    # NICE FOR DEBUGGING NESTED PARAMS IN BROWSER
    # render json: params

  end # create()



  # READ

  # 1. Index of all planets
  def index
    @planets = Planet.all
  end # index()

  # 2. Details for one planet, by ID
  def show
    @planet = Planet.find params[:id]
  end # show()


  # UPDATE

  # 1. Show the pre-filled form
  def edit
    @planet = Planet.find params[:id]
  end  # edit()

  # 2. Edit form submits here, update DB and redirect
  def update
    planet = Planet.find params[:id]

    # TODO: validation! make sure the update was successful!
    planet.update(
      name: params[:planet][:name],
      mass: params[:planet][:mass],
      orbit: params[:planet][:orbit],
      moons: params[:planet][:moons],
      image_url: params[:planet][:image_url]
    )

    redirect_to planet_path( params[:id] )

  end  # update()

  # DELETE
  def destroy
    Planet.destroy params[:id]
    redirect_to planets_path  # back to index, /planets
  end  # destroy()

end # class PlanetsController
