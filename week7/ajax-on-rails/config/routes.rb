Rails.application.routes.draw do

  # root to: 'dashboard#home'

  get '/dashboard' => 'dashboard#app'

end
