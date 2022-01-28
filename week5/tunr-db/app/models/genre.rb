class Genre < ApplicationRecord

  # This defines one end of a many-to-many association;
  # it requires that 'genres_songs' join table exists,
  # and that the table has 'genre_id' and 'song_id'
  # integer columns 
  has_and_belongs_to_many :songs

end
