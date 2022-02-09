
require 'httparty'

# This request is made over the network......
res = HTTParty.get 'http://www.numbersapi.com/42?json'
# AND THE PROGRAM PAUSES (blocks) HERE UNTIL THE RESPONSE
# IS RECEIVED....
# i.e. This is a synchronous/blocking request
puts res
