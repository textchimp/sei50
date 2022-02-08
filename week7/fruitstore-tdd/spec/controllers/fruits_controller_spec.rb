
require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  describe 'GET #index' do

    before do
      # Set up some database table contents
      @shelf = Shelf.create name: 'test shelf'
      3.times do |i|
        Fruit.create name: "Fruit number #{i}", shelf_id: @shelf.id
      end
      @fruits = Fruit.all
      get :index
    end

    it 'returns HTTP success' do
      expect( response ).to have_http_status( :success )
    end

    it 'renders the index template' do
      expect( response ).to render_template( :index )
    end

    it 'assigns the instance variable @fruits which contains all the fruits in the DB' do
      expect( assigns(:fruits) ).to be
      # expect( assigns(:fruits).length ).to eq ???
    end


  end #  GET #index


end  # describe FruitsController
