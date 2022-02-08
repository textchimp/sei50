Rails.application.routes.draw do

  get '/fruits' => 'fruits#index'

  post '/fruits' => 'fruits#create'

  get '/fruits/:id' => 'fruits#show', as: 'fruit'  # gives 'fruit_path'

end
