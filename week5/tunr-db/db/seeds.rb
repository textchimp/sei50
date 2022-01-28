
print "Creating songs... "

Song.destroy_all

s1 = Song.create! title: 'Achy Breaky Heart'
s2 = Song.create! title: 'Draw Us In'
s3 = Song.create! title: 'Burn the Witch'
s4 = Song.create! title: 'Identikit'

puts "created #{ Song.count } songs."

##################################################

print "Creating artists... "

Artist.destroy_all

art1 = Artist.create! name: 'Billy Ray Cyrus'
art2 = Artist.create! name: 'Metz'
art3 = Artist.create! name: 'Radiohead'

puts "created #{ Artist.count } artists."


# Create associations from artists to their songs
art1.songs << s1
# ActiveRecord is 'repurposing' (overloading) the '<<' operator
# which Ruby uses as an alias for .push -
# here it means "The song s1 has its artist_id set to art1.id"

# You could still create a song using this syntax:
#    Song.create! title: 'woop de doop', artist_id: art1.id
# BUT the artist would have to be created before the song, in this case.
# The '<<' operator lets us add associations to existing objects later on

# "Draw Us In" (s2) is by Metz (art2)
art2.songs << s2

# Both 'Burn the Witch' and 'Identikit' (s3 and s4) are by Radiohead (art3)
art3.songs << s3 << s4

# Test the associations:
puts "Testing artist -< songs associations:"
puts "  • the song '#{ Song.first.title}' is by #{ Song.first.artist.name }"
puts "  • the artist #{ Artist.last.name } has the songs: #{ Artist.last.songs.pluck(:title).join(', ') } "



##################################################

print "Creating albums... "

Album.destroy_all

alb1 = Album.create! title: 'Some Gave All', year: '1992'
alb2 = Album.create! title: 'Atlas Vending', year: '2021'
alb3 = Album.create! title: 'A Moon-Shaped Pool', year: '2016'

puts "created #{ Album.count } albums."

# Create assocation from songs to albums
alb1.songs << s1

alb2.songs  << s2

alb3.songs << s3 << s4

puts "Testing album -< songs association:"
puts "  • the song '#{ Song.first.title }' is on the album '#{ Song.first.album.title}' "
puts "  • the album '#{ Album.last.title}' has the songs: #{ Album.last.songs.pluck(:title).join(', ') }  "


########################################################################

print "Creating genres... "

Genre.destroy_all

g1 = Genre.create! name: 'Post Punk'
g2 = Genre.create! name: 'Math Rock'
g3 = Genre.create! name: 'Paranoid Art Rock'
g4 = Genre.create! name: 'Sadcore'
g5 = Genre.create! name: 'Country'
g6 = Genre.create! name: 'IDM'

puts "created #{ Genre.count }  genres."

# Create Genre >-< Song many-to-many assocations:

# s1 ('Achy Breaky Heart') is in the genre g4 ('Country')
# In other words, in the join table 'genres_rows', create a new
# row with song_id = s1.id, and genre_id = g5.id
s1.genres << g5

# This creates THREE rows in the 'genres_songs' join table
s2.genres << g1 << g2 << g4

s3.genres << g3 << g4 << g6

s4.genres << g3 << g4

# Because this is a many-to-many, you could also start
# from the other end of the association
#   g1.songs << s1 << s3 << s5
