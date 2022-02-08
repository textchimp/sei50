
require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  describe 'GET #index' do

    before do
      # Set up some database table contents
      # - THE CONTROLLER ITSELF WILL ACCESS THE SAME TEST DATABASE
      # VALUES THAT WE INITIALISE HERE
      @shelf = Shelf.create name: 'test shelf'
      3.times do |i|
        Fruit.create! name: "Fruit number #{i}", shelf_id: @shelf.id
      end
      @test_fruits = Fruit.all
      get :index
    end

    it 'returns HTTP success' do
      expect( response ).to have_http_status( :success )
    end

    it 'renders the index template' do
      expect( response ).to render_template( :index )
    end

    it 'assigns the instance variable @fruits which contains all the fruits in the DB' do
      # To talk about controller instance variables we have
      # to use the RSpec syntax 'assigns(:fruits)'
      expect( assigns(:fruits) ).to be
      expect( assigns(:fruits).length ).to eq @test_fruits.length
      expect( assigns(:fruits).first ).to be_a Fruit
    end


    it 'assigns to @fruits the DB fruits in the reverse order' do
      expect( assigns(:fruits).first.name ).to eq @test_fruits.last.name
    end

  end #  GET #index


  describe 'POST to #create' do

    describe 'a fruit with valid information' do

      before do
        # Fake a form POST which creates a new Fruit
        post :create, params: {
          fruit: {
            name: 'Strawberry',
            shelf_id: Shelf.create( name: 'test').id
          }
        }
      end # before

      it 'should increase the number of fruits in the DB by 1' do
        expect( Fruit.count ).to eq 1
      end

      it 'should create a Fruit using the correct form field' do
        expect( Fruit.first.name ).to eq 'Strawberry'
      end


      it 'should redirect to the show action for the created fruit' do
        expect( response ).to redirect_to( Fruit.first )
      end

    end # valid fruit

  end # POST to #create


end  # describe FruitsController
