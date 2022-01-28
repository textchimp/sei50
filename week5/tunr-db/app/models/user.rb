class User < ApplicationRecord

  # Use the bcrypt gem to encrypt passwords at the point of creating a new User object
  # in the 'users' table, and store ONLY the encrypted version

  # User.create! email: 'whatever', password: 'chicken'  ------------->  password_digest: 's7s78fs79f$^#^#7d9f798sdd78f'
  has_secure_password

  has_many :mixtapes


  # You can't leave the email field blank! (How would you login?) ... it also has to be unqiue
  validates :email, presence: true, uniqueness: true


end
