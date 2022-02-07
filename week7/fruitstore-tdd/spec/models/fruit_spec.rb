
require 'rails_helper'  # load up Rails context for this test file

RSpec.describe Fruit, type: :model  do

  # The code in this block runs uniquely before
  # each specific example ('it' block) below
  #
  # This lets us DRY up our example blocks to
  # ideally contain just the assertions
  # (and sometimes specific Actions)
  before do
    Pear.create name: 'nashi', price: 2
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
     Fruit.create name: 'test Fruit'
     expect( Fruit.last.squishy? ).to eq false
   end



end # RSpec.describe Fruit
