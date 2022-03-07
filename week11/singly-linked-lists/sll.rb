require 'pry'

# THOUGHT EXPERIMENT:

# WHAT IF you didn't have arrays in a language?

# ...use a Ruby 'mixin' to give 'map', 'reduce' etc for free
# as long as we define an 'each' method


# int nums[10];
#

class SLL

  # keep track of the first node in the list; from this
  # we can advance via '.next' to all the following nodes
  attr_accessor :head

  def initialize( val )
    # Create an instance of the Node class, and forward
    # on the 'val' argument given to this SLL constructor
    # as the data of this new node; the returned Node
    # is stored as the @head of this SLL object
    @head = Node.new val
  end


  # This method will create a new node, assign 'val'
  # as its data, and make that new node the new
  # @head of the list; and so we don't lose the rest
  # of the list, we need to set the old @head of the
  # list to be the .next of this new node!
  def prepend( val )
    new_node = Node.new val
    new_node.next = @head
    @head = new_node
  end

  # Ruby will look for the .to_s method to be defined
  # on your instance when you give the instance to
  # a printing method like 'puts'; this lets you define
  # a custom string representation of the data in
  # this object
  def to_s

    # How do we visit every node in this list?
    # Start with the @head, the first item:
    #   append its .data to a new string, and then
    #   follow its .next to get your new node,
    #   and repeat until .next gives you a 'nil'

    output = ''
    node = @head
    while node != nil
      output += node.data + ', '
      node = node.next # advance the current 'node' pointer
    end # while

    output   # implicit return
  end # to_s()


  # Create a new node with the specified value and
  # add it to END of the list, i.e. make it the .next
  # of the LAST node in the list
  def append( val )

    new_node = Node.new val

    node = @head
    # This loop will continue until 'node' itself
    # is the last node (NOT until node is nil)
    while node.next != nil
      node = node.next
    end
    node.next = new_node # append

    # self  # if you want to return the whole list

  end # append()


  # Find (and return) the entire node whose 'data'
  # is the specificed needle arg
  # TODO: find_all ??? Return a list of all the nodes
  # with the matching data; but no arrays, so you'll
  # have to return a new SLL
  def find( needle )

    node = @head
    while node != nil
      if node.data == needle
        return node # return the matching node
      end
      node = node.next # advance to next node! DON'T FORGET
    end # while

  end # find()


  # Create a new node with the specified value,
  # and splice it in to the list after the specified node
  def insert_after( node, val )

    new_node = Node.new val

    # Our new node points to the inser-after node's
    # next node
    new_node.next = node.next

    # The insert-after node's next now becomes
    # our new node
    node.next = new_node

  end # insert_after()



  # Homework: implement these methods:


  # length - returns the length of the list;
  # this will require iteration!
  # Bonus: make an extra instance variable
  # that updates when you prepend/append/insert
  # so that you always know the current length
  # WITHOUT needing to loop through the whole list
  #
  # def length


  # at_index( n )
  # array-like access of specific item at an index,
  # returns the entire node at that index
  #
  # def []( n )     #  list[ n ]


  # reverse - returns a reversed version of the list
  # do NOT change the original list, i.e.
  # make this method non-destructive
  #
  # def reverse


  # reverse! - destructive version of reverse,
  # DOES change the list you call it on, i.e.
  # changes 'self'
  #
  # def reverse!


  # shift - remove the first node from the list
  # and returns it
  #
  # def shift


  # delete - remove the specified node from the list,
  # i.e. a kind of splice
  # ... since this method expects as an argument
  # an actual node that is currently in the list,
  # it assumes you have used .find() (or maybe
  # .at_index(n) / [n] ) to get a current node
  #
  # def delete( node )


  # each - implement the each method as it exists in
  # Ruby, i.e. your version of each must take a block
  # and run that block for each node in the list,
  # providing the block with a block variable which
  # will be the current node as it loops through
  # each of them - look into 'yield' and
  # 'block_given?'
  #
  # def each


  # map - as above, but applies the block to each
  # node and returns an array of those transformed
  # values
  #
  # def map


  # Bonus: research 'mixins' in Ruby and how you can use
  # the 'Enumerable' mixin to get FOR FREE methods
  # like map, reduce, select/filter
  # .... as long as you have defined a working 'each'



  class Node


    # TODO: research Ruby 'Struct' that lets you create
    # a data class like this in one line:
    #    Node = Struct.new(:data, :next)

    attr_accessor :data, :next
    # # getter
    # def data
    #   @data
    # end
    #
    # # setter
    # def data=( val )
    #   @data = val
    # end

    def initialize( val )
      # set an initial value for the @data
      #   Node.new 'my piece of data'
      @data = val
    end


  end # Node

end # SLL


list = SLL.new 'Morty'
list.prepend 'Rick'
list.append 'Summer'

p list

binding.pry # start debugger
