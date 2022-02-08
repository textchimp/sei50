
require 'rails_helper'  # load up Rails context for this test file

RSpec.describe Fruit, type: :model  do

  # The code in this block runs uniquely before
  # each specific example ('it' block) below
  #
  # This lets us DRY up our example blocks to
  # ideally contain just the assertions
  # (and sometimes specific Actions)
  before do
    shelf = Shelf.create name: 'test shelf'
    Pear.create name: 'nashi', price: 2, shelf_id: shelf.id
    @pear_retrieved = Pear.first
  end


   # We provide a series of 'examples':

   it 'should create a valid Fruit object' do

     # AAA: Arrange, Act, Assert
     # p @pear_retrieved

     # Assert - RSpec has its own special
     # syntax for expressing assertions
     # .. almost a DSL of its own
     expect( @pear_retrieved ).to_not be_nil
     expect( @pear_retrieved ).to be_a Fruit
   end


   it 'should remember its name' do
     expect( @pear_retrieved.name ).to eq 'nashi'
   end


   it 'should remember its price' do
     expect( @pear_retrieved.price ).to eq 2
   end


   it 'should remember its class via Single Table Inheritance' do
     expect( @pear_retrieved.class ).to eq Pear
     expect( @pear_retrieved ).to be_a Pear
   end


   it 'should not consider Fruits to be Pears' do
     expect( Pear.count ).to eq 1

     # Perform a new action and asser that it has not
     # changed the number of Pear results
     Fruit.create name: 'basic fruit'
     expect( Pear.count ).to eq 1
   end


   it 'should be squishy (if a Pear)' do
     expect( @pear_retrieved.squishy? ).to eq true
   end


   it 'should not be squishy (if a base Fruit)' do
     fruit = Fruit.create name: 'test Fruit'
     expect( fruit.squishy? ).to eq false
   end


   # Test AR model validations

   it 'should fail validation when created without a name' do
     pear = Pear.create
     expect( pear ).to be_invalid
     # expect( pear.invalid? ).to eq true
   end

   it 'should validate the uniqueness of the name' do
     pear_duplicate = Pear.create name: 'nashi' # same as @pear_retrieved created in before block
     expect( pear_duplicate ).to be_invalid
   end


   # Test the association: a Fruit belongs_to a Shelf
   # Note the one-line version of the 'it' block - no description string,
   # RSpec can work it out from the context
   it { should belong_to(:shelf)  }


end # RSpec.describe Fruit
