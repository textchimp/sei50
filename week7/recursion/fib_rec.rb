
# Recursive version
#
# fib(n) = fib(n-1) + fib(n-2)
#
# indexes:  0  1  2  3  4  5  6   7   8
# sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

# HOMEWORK CHALLENGE: "memoize" the fib_rec() calls -
# Create a hash whose keys are the n argument values given to the function,
# and the first time an answer for n is calculated, store that answer as
# the value of the n key in the hash;
# When the function runs, CHECK the hash to see if there is a key already
# defined for that value of n - if so, use the value of that key as the
# return value of the function INSTEAD OF THE RECURSION
# (if it's not defined, do the recursive calls)

# i.e. increase the TIME efficiency of this function (run faster, less redundant repetition)
# by decreasing the SPACE efficiency (using more memory to store the hash)

def fib_rec( n )

  # Define our base case:
  if n < 2
    return 1
  else
    # do the recursive calculation:
    return fib_rec( n-1 ) + fib_rec( n-2 )
  end # else

end  # fib_rec()


puts fib_rec( ARGV.first.to_i )
