
class CalculatorController < ApplicationController

  def do_calculation

    @first = params[:first].to_i
    @op = params[:op]
    @second = params[:second].to_i

    # RUBY MAGIC!! Mathematical operators are methods!
    @answer = @first.send( @op, @second )

    # @answer = case @op
    # when '+' then @first + @second


  end # do_calculation()


  def home
    # just show calculator form
  end # home()

end # class CalculatorController
