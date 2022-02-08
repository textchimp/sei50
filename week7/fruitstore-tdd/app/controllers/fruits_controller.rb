class FruitsController < ApplicationController

  def index
    @fruits = Fruit.all.reverse
  end


  def create
    fruit = Fruit.create fruit_params
    redirect_to fruit   # this means the :show route for this object
  end


  private

  def fruit_params
    params.require(:fruit).permit(:name, :shelf_id)
  end

end # class FruitsController
