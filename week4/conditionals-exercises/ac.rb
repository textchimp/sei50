# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.

print "Enter current temp: "
current_temp = gets.to_i

print "Is AC functional? (y/n): "
ac_functional = gets.chomp

print "Enter desired temp: "
desired_temp = gets.to_i

# p current_temp, ac_functional, desired_temp


#
#     If the airconditioner is functional
#       and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     If the airconditioner is non-functional
#       and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
#     If the airconditioner is non-functional
#       and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

if ac_functional == 'y' 
  # AC *is* functional
  if current_temp > desired_temp
    puts "Turn on the A/C Please"
  end # temp check

else
  # AC is broken
  # puts "AC is broken!"

  if current_temp > desired_temp
    puts "Fix the A/C now! It's hot!"
  else
    puts "Fix the A/C whenever you have the chance... It's cool..."
  end # temp check

end # else (ac_functional)
