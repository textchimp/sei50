
require 'sinatra'
require 'sinatra/reloader'

require 'httparty'

get '/' do
  "Hello from Stock Lookup"
end # get /

# 1. Search form
get '/search' do
  erb :search_form
end # get /search


# 2. Form submits here, do httparty URL query, and send results to ERB template
get '/search/results' do

  @results = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:title] }"

  # "<pre>#{ results }</pre>"

  erb :results

end # get /search/results
