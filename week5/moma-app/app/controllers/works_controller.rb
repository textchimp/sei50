class WorksController < ApplicationController

  def new
    @work = Work.new
  end

  def create
    # raise 'hell'
    Work.create work_params  # we need to create 'work_params'
  end

  # READ

  def index
    @works = Work.all
  end

  def show
    @work = Work.find params[:id]
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def work_params
    params.require(:work).permit( :title, :year, :medium, :style, :image, :artist_id )
  end

end  # class WorksController
