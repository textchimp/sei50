
class PagesController < ApplicationController


  def say_hi
    puts "hello"
    "Hello from server"  # in Sinatra this is what the browser would see

  end # say_hi()


  def haha
    # do whatever here
    @title = 'Dogs Playing Poker'
  end # haha()


  def greet
    # @recipient = params[:person]
  end  # greet()


end  # class PagesController
