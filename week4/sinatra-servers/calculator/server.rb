
require 'sinatra'
require 'sinatra/reloader'


get '/' do
  # "Hello from the calculator root route"
  erb :intro
end

get '/about' do
  erb :calc_about
end

# Matches routes like '/calc/50/+/30'
get '/calc/:first_num/:op/:second_num' do

  # params.to_s
  # "here is params: #{ params }"

  @first_num = params[:first_num].to_i
  @op = params[:op]
  @second_num = params[:second_num].to_i


  # if @op == '+'
  #   @result = @first_num + @second_num
  # elsif @op == '-'
  #   @result = @first_num - @second_num
  # end

  @result = case @op
  when '+'   then @first_num + @second_num
  when '-'   then @first_num - @second_num
  when '*'   then @first_num * @second_num
  when 'div' then @first_num / @second_num.to_f
  end

  erb :calc_results

end  # get calc example


# Show the blank calculator form
get '/calc/form' do
    erb :form
end


# Above form submits to this route, which
# does calculations and show results in a template
# /calc/results?first=50&operator=%2B&second=33
get '/calc/results' do

  @first_num = params[:first].to_i
  @op = params[:operator]
  @second_num = params[:second].to_i
  p 'op', @op
  @result = case @op
  when '+'   then @first_num + @second_num
  when '-'   then @first_num - @second_num
  when '*'   then @first_num * @second_num
  when '/' then @first_num / @second_num.to_f
  end

  erb :calc_results
end # get '/calc/results'
