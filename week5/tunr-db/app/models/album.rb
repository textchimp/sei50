class Album < ApplicationRecord

  has_many :songs

  has_many :artists, through: 'songs'

  # Create a kind of helper method to make easier to get a single artist instead of the
  # array of duplicate artists provided by the through assocation
  def artist
    self.artists.first  # Assumption is that there actually is only one artist per album
  end  # artist()

  # Rails will look for the 'to_s' method any time you 'puts' an object
  # or interpolate into a string
  def to_s
    "'#{ self.title }' by #{ self.artist.name }"
  end

  def song_titles
    self.songs.pluck( :title ).join(', ')
  end


end  # class Album
