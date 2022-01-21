
require 'pry' # for debugging

# Class names are ALWAYS capitalized in Ruby
class Person

  # Ask Ruby to write the getter and setter methods
  # for us - for both these instance variables
  attr_accessor :name, :location, :age

  # you can have an empty class!
  # ... boring!

  # 'self' here is NOT 'inside' the function body,
  # so it doesn't refer to "the current object"...
  # refers to the class Person
  def self.explain
    puts "This is a class for creating people... and apparently also breeding them."
  end  #


  


  def +( other_person )
    baby_name = @name + ' ' + other_person.name
    Person.new baby_name, 'here'
  end  # +()

  # If you define a method called 'initialize' in
  # your class, THAT is the method that is called
  # when you run 'Person.new'
  # i.e. This is the 'constructor function' - used
  # to create a new object
  def initialize( first_name, location )
    puts "initialize() was called"
    puts "Birthing new person called #{first_name}"

    # Save the local variable (parameter) first_name
    # into a "more global" variable with an '@'
    # This variable is called an "instance variable"
    # and is visible within all methods of the
    # object (instance)
    @name = first_name
    @location = location
    # @lucky_number = rand 10

    # Implicit return DOES NOT APPLY HERE
    # - the function always gives you an instance
    # (an object of the class)

  end  # initialize()

  # You can have a class that is really just
  # a container for functions (methods),
  # i.e. no local data (variables)

  # GETTERS for instance variables:

  # def name
  #   @name
  # end
  #
  #
  # def location
  #   #puts "Accessing location..."
  #   @location
  # end
  #
  # # SETTERS for instance variables
  #
  # def name=( new_name )
  #   puts "DEBUG: changing #{@name} to #{new_name}"
  #   @name = new_name
  # end
  #
  # def location=( new_loc )
  #   @location = new_loc
  # end



  def hello
    puts "Hello, my name is #{ @name } and I am from #{ @location }"
  end # hello()


  def goodbye
    puts "Bye, it was great to meet to you!"
  end # goodbye()



end  # class Person



# Inheritance!
# Let's make a new, more specific type of Person
# called a Comedian
# They will inherit all the behaviour (methods) and
# data of the Person "parent" class
# (a.k.a. "superclass")...
# But they might add some specific behaviour of their
# their own, and they might "redefine" some of the
# inherited behaviour

# Parent is CLOSED FOR MODIFICATION, OPEN FOR EXTENSION

# "Comedian inherits from Person"
class Comedian < Person

  # All the Person methods and instance variables
  # are inherited (imported) here!


  def initialize( first_name )

    # Use the parent's version of initialize()
    super first_name, 'London' # hard-code the location

    # @first_name = first_name
    # @location = 'London'
    puts "Making a Comedian"
  end

  # Add a new method for Comedian objects,
  # that is not available for Person objects
  def tell_joke

    print "What's brown and sticky?"
    5.times do
      print '.'
      sleep 0.2
    end
    puts "A stick!"

  end  # tell_joke()

  # Redefine ("override") a method that this class
  # has inherited from Person
  def hello

    # "Run the version of the current method (hello)
    # that is defined in the parent class (Person)"
    super

    puts "Hello ladies and gentlemen, my name is #{ @name } and I'll be your entertainment for the evening."
  end  # hello()


end # class Comedian

binding.pry # drop into pry at this point
