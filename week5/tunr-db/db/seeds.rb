
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
