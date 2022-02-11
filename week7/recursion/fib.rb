# Iterative fibonacci sequence

# indexes:  0  1  2  3  4  5  6   7   8
# sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...


def fib( n )

  a = 1
  b = 1

  n.times do
    temp = a
    a = b
    b = a + temp   # WTF
  end

  a

end # fib

puts fib( ARGV.first.to_i )
