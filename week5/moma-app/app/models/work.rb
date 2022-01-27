class Work < ApplicationRecord

  belongs_to :artist      # tell AR to use the 'artist_id' column of this 'works' table, and add a method called '.artist' to every Work object, to retrieve that artist

end
