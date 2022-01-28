class Song < ApplicationRecord

  # We want to be able to create songs first, and later connect
  # them to their artist later, so we need the artist_id value
  # to be optional when we create a Song
  belongs_to :artist, optional: true

  belongs_to :album, optional: true

  # Many-to-many association with Genre
  has_and_belongs_to_many :genres

  has_and_belongs_to_many :mixtapes

end
