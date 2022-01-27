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
  # 2. Form submit, update, redirect


  # Delete

  # Destroy artist by ID, redirect


end
