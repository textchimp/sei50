Rails.application.routes.draw do

  # DELETE JUNK

  # root to: 'dashboard#home'

  # SPA home route:
  get '/dashboard' => 'dashboard#app'

  # AJAX API routes that return JSON data for axios requests

  get '/uptime' => 'dashboard#uptime'

  get '/cpuhog' => 'dashboard#cpu_hog'

  # Message model API endpoints (still use CRUD conventions)
  get '/messages'     => 'messages#index'
  get '/messages/:id' => 'messages#show'

  # Custom route, not really CRUD
  get '/messages/search/:query' => 'messages#search'


end
