Rails.application.routes.draw do

  # Create ##################################################

  # 1. Blank form
  # ROUTE: GET /planets/new
  # CONTROLLER ACTION: planets#new
  # TEMPLATE: new.html.erb
  # AR QUERY: n/a
  get '/planets/new' => 'planets#new', as: 'new_planet'

  # 2. Form submits here, save to DB, redirect
  # ROUTE: POST /planets
  # CONTROLLER ACTION: planets#create
  # TEMPLATE: n/a (redirect)
  # AR QUERY: Planet.create(param fields here)
  post '/planets' => 'planets#create'

  # Read   ##################################################

  # a. Index page, i.e. list every row of the 'planets' table
  # ROUTE: GET /planets
  # CONTROLLER ACTION: planets#index
  # TEMPLATE: app/views/planets/index.html.erb
  # AR QUERY: Planet.all
  get '/planets' => 'planets#index'


  # b. Show page, i.e. details about one row (planet) by ID
  # ROUTE: GET /planets/:id
  # CONTROLLER ACTION: planets#show
  # TEMPLATE: show.html.erb
  # AR QUERY: Planet.find params[:id]
  get '/planets/:id' => 'planets#show', as: 'planet'
                                        # gives us 'planet_path(ID_HERE)'

  # Update ##################################################

  # 1. Show pre-filled edit form
  # ROUTE: GET /planets/:id/edit
  # CONTROLLER ACTION: planets#edit
  # TEMPLATE: edit.html.erb
  # AR QUERY: Planet.find params[:id]
  get '/planets/:id/edit' => 'planets#edit', as: 'edit_planet'

  # 2. Form submits to here, do DB update, redirect
  # ROUTE: PATCH /planets/:id  (PATCH is a new HTTP verb indicating an update)
  # CONTROLLER ACTION: planets#update
  # TEMPLATE: n/a  (redirect)
  # AR QUERY: find + update
  patch '/planets/:id' => 'planets#update'

  # Even though the above form submit method is officially "post", the hidden form variable "_method" specifies "patch", which takes priority here. Soon this will be part of the HTTP spec, i.e. a new verb

  # Delete ##################################################
  # Just perform destroy by ID, and redirect
  # ROUTE: GET /planets/:id/delete
  # CONTROLLER ACTION: planets#destroy
  # TEMPLATE: n/a  (redirect)    # commit test 5 
  # AR QUERY: Planet.destroy params[:id]
  get '/planets/:id/delete' => 'planets#destroy', as: 'destroy_planet'

end
