
class MoviesController < ApplicationController

  def home
    # does this need to do anything?
  end

  def results
    # raise 'hell'
    url = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{ params[:query] }&include_adult=false"
    puts url
    @results = HTTParty.get  url

  end



end # class MoviesController
