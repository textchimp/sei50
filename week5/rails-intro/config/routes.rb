Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# WHAT'S THE ROUTE?   WHAT CODE HANDLES IT?
# verb  path         controller # method name
  get   '/hello'   => 'pages#say_hi'

  get '/hello/:person' => 'pages#greet'

  get '/funny'  => 'pages#haha'

  get '/calc/:first/:op/:second' => 'calculator#do_calculation'

  # Form-based calculator

  # 1. Blank form
  get '/calc' => 'calculator#home'

  # 2. Form submits to this route (via action=""), do the calculations, show result
  get '/calc/answer' => 'calculator#do_calculation'


end


# DO NOT ADD ROUTES BELOW THE 'end'
