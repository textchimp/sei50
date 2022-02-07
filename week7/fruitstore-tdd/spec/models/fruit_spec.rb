
require 'rails_helper'  # load up Rails context for this test file

RSpec.describe Fruit, type: :model  do


   # We provide a series of 'examples':

   it 'should create a valid Fruit object' do

     # AAA: Arrange, Act, Assert
     Pear.create name: 'nashi'

     @fruit_retrieved = Pear.first

     # Assert - RSpec has its own special
     # syntax for expressing assertions
     # .. almost a DSL of its own
     expect( @fruit_retrieved ).to_not be_nil


   end


end # RSpec.describe Fruit
