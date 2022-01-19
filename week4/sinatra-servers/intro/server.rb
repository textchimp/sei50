
# Tell Ruby that we want to use one of the
# pre-installed gem libraries in the
# current program

require 'sinatra'
require 'sinatra/reloader'  # automatically restart the server when we change this file


# Define some routes that our webserver will respond to
# i.e. like a switchboard, or series of if-elsif/case statements
# We use the Sinatra DSL (Domain-Specific Langauge) to do this

get '/' do
  puts "Root route requested" # The browser will NOT see 'puts' output

  "<h1>HELLO FROM SINATRA! #{rand}</h1>"  # The final value in the block is what gets returned to the browser!

end # get '/'


get '/about' do
  "Welcome to the About Page"
end # get '/about'


get '/luckynumber' do

  # Tell Sinatra to go into the 'views' folder (this is assumed) and find the
  # file called 'lucky.erb'... and return the contents of that file!

  max = 100

  @number = rand max

  erb :lucky

end # get '/luckynumber'



get '/hello/jesus' do
  "<h1>Hello Jesus!</h1>"
end

get '/hello/angela' do
  "<h1>Hello Angela!</h1>"
end

# Dynamic route - the route has a 'blank' in it that can respond to
# a range of literal routes: i.e. '/hello/SOMEONE' - NOT INCLUDING '/' sub-paths
get '/hello/:student_name' do
  "Hello to #{  params[:student_name].upcase  }"
end


get '/hello/:name/feels/:mood' do
  # "Hello, #{ params[:name] } ... today you are #{ params[:mood] }"

  @name = params[:name].capitalize
  @mood = params[:mood]  # not really necessary

  # @results = db_query("....")

  erb :mood # nothing to do with the route placeholder ':mood'

end
