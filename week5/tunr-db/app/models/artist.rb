class Artist < ApplicationRecord

  has_many :songs

  # FREE association - no extra _id required:
  # an artist has many genres that they work in,
  # because an artist has many songs, and songs
  # have many genres... so we can ask ActiveRecord
  # to make that shortcut for us, by telling it which
  # table to go through
  # This is a "through association" - use an in-between
  # model to get to a more remote one
  has_many :genres, through: 'songs'

  has_many :albums, through: 'songs'

end
