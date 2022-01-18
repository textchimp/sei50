# 1. Create an array of the days of the week
#

#     Create a variable named days_of_the_week as an array of the following:
#         Monday
#         Tuesday
#         Wednesday
#         Thursday
#         Friday
#         Saturday
#         Sunday

days_of_week = %w{ Monday  Tuesday  Wednesday  Thursday  Friday  Saturday Sunday  }

# p days_of_week

#
# 2. My calendar says the first day is Sunday...
#
#     Remove Sunday from the last postion and move it to the first position. Use array methods.
#
moved_day = days_of_week.pop
days_of_week.unshift moved_day
# days_of_week.rotate! -1   # RTFM! STFW!
# p days_of_week




# 3. Create a new array of the days of the week :
#
#     Re-create the original days_of_the_week array first, to undo the modifications from #2
#     The first inner array should be the weekdays
#     The second inner array should be the weekend days
#
days_of_week = %w{ Monday  Tuesday  Wednesday  Thursday  Friday  Saturday Sunday  }


week_days = days_of_week[0, 5]  # start at index 0, and give me the next 2 items
# week_days = days_of_week.take 5
p week_days

weekend_days = days_of_week[ 5, 2 ]
# weekend_days = days_of_week.drop 5
p weekend_days

week_parts = [ week_days, weekend_days  ]
# week_parts = [
#   days_of_week[0, 5],
#   days_of_week[ 5, 2 ]
# ]
p week_parts

# 4. Remove either the weekdays or the weekends
#
# Your choice...

require 'pry'; binding.pry


week_parts.pop  # removes the weekend days (i.e. last element in the outer array)
# week_parts.shift # removes the week days (i.e. the first element in the outer array)

# 5. Sort the remaining days alphabetically
week_parts.first.sort
