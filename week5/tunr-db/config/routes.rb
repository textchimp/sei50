Rails.application.routes.draw do

  
  root to: 'pages#home'

  get '/login'    => 'session#new'     # show the login form
  post '/login'   => 'session#create'  # form submits to here, performs login, redirect
  delete '/login' => 'session#destroy' # logout link goes here, perform logout, redirect


  resources :mixtapes
  #     mixtapes GET    /mixtapes(.:format)          mixtapes#index
  #              POST   /mixtapes(.:format)          mixtapes#create
  #  new_mixtape GET    /mixtapes/new(.:format)      mixtapes#new
  # edit_mixtape GET    /mixtapes/:id/edit(.:format) mixtapes#edit
  #      mixtape GET    /mixtapes/:id(.:format)      mixtapes#show
  #              PATCH  /mixtapes/:id(.:format)      mixtapes#update
  #              PUT    /mixtapes/:id(.:format)      mixtapes#update
  #              DELETE /mixtapes/:id(.:format)      mixtapes#destroy

end
