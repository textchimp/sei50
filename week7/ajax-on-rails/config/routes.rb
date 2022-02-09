Rails.application.routes.draw do

  # root to: 'dashboard#home'

  # SPA home route:
  get '/dashboard' => 'dashboard#app'

  # AJAX API routes that return JSON data for axios requests

  get '/uptime' => 'dashboard#uptime'

  get '/cpuhog' => 'dashboard#cpu_hog'

  # Message MODEL API endpoints (still use CRUD conventions)


end
