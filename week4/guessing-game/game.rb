#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
#
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
#
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"



# Load a library to use in our code
# Like the <script src="js/jquery.js">
require 'colorize'

def get_guess
  print "Enter your guess: "
  gets.to_i
end # get_guess()

def give_feedback(secret, guess)
  if guess > secret
    puts "Too high!".green
  elsif guess < secret
    puts "Too low!".red
  end
end # give_feedback()

# Ask the user for the maximum number
print "Enter the maximum guess value: ".yellow
max_guess = gets.to_i

secret_number = rand max_guess   # i.e.   rand( max_guess )

user_guess = -1  # initialise to a number that guarantees the loop will start


while secret_number != user_guess

  # require 'pry'; binding.pry # pause this program in pry, like 'debugger' in JS
  user_guess = get_guess

  give_feedback( secret_number, user_guess )

end   # while guess is wrong

puts "Congratulations!"
