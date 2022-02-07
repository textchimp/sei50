# This is a DERIVED/CHILD class of Fruit, which is itself a child class of ApplicationRecord (ActiveRecord)

# In other words, this is a model which
# inherits from some other parent model

# This causes Pear to not need its own table -
# it just uses the 'fruits' table

class Pear < Fruit

end
