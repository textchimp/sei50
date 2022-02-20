Rails.application.routes.draw do

  # API endpoints for use from the
  # React frontend

  get '/secrets' => 'secrets#index'

  post '/secrets' => 'secrets#create'

end
