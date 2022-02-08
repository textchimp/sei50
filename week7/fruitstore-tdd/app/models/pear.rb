# This is a DERIVED/CHILD class of Fruit, which is itself a child class of ApplicationRecord (ActiveRecord)

# In other words, this is a model which
# inherits from some other parent model

# This causes Pear to not need its own table -
# it just uses the 'fruits' table

# This is called 'Single Table Inheritance' and
# it's the reason you can't have a table
# column called "type"

class Pear < Fruit

  validates :name, presence: true, uniqueness: true

  def squishy?
    true
  end

end
