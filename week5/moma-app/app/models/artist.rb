class Artist < ApplicationRecord

  has_many :works  # tell AR to look at the 'artist_id' column in the 'works' table, and add a method called '.works' to every Artist object, to retrieve their list of Work objects

end
