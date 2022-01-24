Rails.application.routes.draw do

  # get '/' => 'movies#home'  ???
  root to: 'movies#home'

  # 1. Blank form where user enters movie search text
  # get '/search' => 'movies#search'

  # 2. Form submits to here, do API request using HTTParty.get, loop through results in template
  get '/movie/search-results' => 'movies#results'

  # BONUS: a show page using a route like '/movies/:id' to perform ANOTHER HTTParty request to the movie details endpoint

end
