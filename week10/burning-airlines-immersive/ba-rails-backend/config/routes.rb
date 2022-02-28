Rails.application.routes.draw do

  # API endpoints for AJAX-based frontend

  get '/flights' => 'flights#index'


end
