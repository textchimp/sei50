
# iterative version

def countdown( n=10 )

  # we define a "base case" - WHEN to STOP looping
  while n >= 0

    puts n

    # Do something in each iteration
    # that GETS US CLOSER TO THE BASE CASE
    n = n - 1   # n -= 1

    sleep 0.3  # just for visual drama

  end # while

  puts "Blast off!"

end # countdown


# countdown


# recursive version?

# We can create our own looping structures
# as long as the language supports:
# - variables (constants)
# - functions
# - conditionals

def countdown_rec( n=10 )

  # Define a "base case": a condition under which
  # this function STOPS calling itself recursively;
  # otherwise, you will have an infinite loop/regress
  # (actually you won't, you'll just "blow the stack")
  if n < 0
    puts "Blast off!"
  else
    # Not finished counting down, so perform the
    # recursive call
    #
    # BUT: we have to do so in a way that brings
    # us a step closer to reaching the base case
    # and getting out of the recursion (otherwise,
    # infinite loop)

    puts n
    sleep 0.3 # just for fun

    countdown_rec( n - 1 )

    puts "Returned (n = #{ n })"

  end # else

end # countdown_rec()

countdown_rec
