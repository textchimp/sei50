Rails.application.routes.draw do

  # root 'pages#home' # also works?!
  root to: 'pages#home'

  # Routes for Artist model

  # Create

  # 1. Blank form
  get '/artists/new' => 'artists#new', as: 'new_artist'

  # 2. Form submit, DB create, redirect
  post '/artists' => 'artists#create'

  # Read

  # a. Index of all artists
  get '/artists' => 'artists#index'

  # b. Show page, details for one artist by ID
  get '/artists/:id' => 'artists#show', as: 'artist'

  # Update

  # 1. Pre-filled form
  get '/artists/:id/edit' => 'artists#edit', as: 'edit_artist'

  # 2. Form submit, update, redirect
  patch '/artists/:id' => 'artists#update'


  # Delete

  # Destroy artist by ID, redirect
  # get '/artists/:id/delete' => 'artists#destroy'
  delete '/artists/:id' => 'artists#destroy'


end
