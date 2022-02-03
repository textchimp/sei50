class User < ApplicationRecord

  # Use the bcrypt gem to encrypt passwords at the point of creating a new User object
  # in the 'users' table, and store ONLY the encrypted version

  # User.create! email: 'whatever', password: 'chicken'  ------------->  password_digest: 's7s78fs79f$^#^#7d9f798sdd78f'
  has_secure_password

  has_many :mixtapes


  # You can't leave the email field blank! (How would you login?) ... it also has to be unqiue
  validates :email, presence: true, uniqueness: true


  # We want users to be able to follow other users
  # This creates two different relationships, since a follow is not 'symmetrical' -
  # YOU can follow another user, without that user following you back
  # i.e. we want to have
  #       u1.followers - the users that are following u1
  #       u1.following - the users that u1 is following

  # We actually need to create another model - Follow
  # ... this will be like a kind of join table, but it is also a model
  #
  # rails g model  Follow   follower_id:integer   followed_id:integer

  # This lets us write
  #    User.first.following_relationships
  # to get a list of who this user is following, BUT you get an array
  # of Follow objects, so to get to the User object you are following,
  # you need to write something awkward like
  #    User.first.following_relationships.first.followed
  has_many :following_relationships,  class_name: 'Follow', foreign_key: 'follower_id'
  has_many :followed_relationships, class_name: 'Follow', foreign_key: 'followed_id'

  # If we add a 'through' association, then we get the 'User.first.following' syntax
  # we want, AND it will be a list of actual User objects (not Follow objects)
  has_many :following, through: :following_relationships, source: :followed
  has_many :followers, through: :followed_relationships, source: :follower

  # So now we can ask "who is the first user following?" by writing
  #      User.first.following
  # and we get and array of User objects
  #
  # AND we have a nice syntax for adding a follow, the same as a many-to-many association:
  #
  # User.first.following << User.second
  #
  # (which you could also write as) User.second.followers << User.first
  #
  # i.e. the Follow model is now invisible/transparent - we never really need to
  # talk to it directly, we use our new User associations following/followers instead


  # Let's add a model method that lets a user follow another user, BUT also checks
  # that they aren't already following them (i.e. avoid duplicates)
  #
  # i.e. we will run   @current_user.follow_safe( @other_user )
  #  ... in the above example, we can access @current_user inside the method
  # as 'self'  (which is like Javascript's 'this')
  def follow_safe( user_to_follow )

    if self.following.include? user_to_follow
      return false   # already following them!
    else
      self.following << user_to_follow
      return true  # just to indicate that we added the follow
    end

  end # follow_safe()


  def following_mixtapes
    # Get the mixtapes of users we are following
    Mixtape.where user: self.following
    # which is the short version of: Mixtape.where user_id: self.following.ids
    # TODO: Look up 'User.joins(:mixtapes)' for a preferred syntax
  end


end  # class User
