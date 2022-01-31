class Mixtape < ApplicationRecord

  has_and_belongs_to_many :songs

  belongs_to :user, optional: true

  validates :name, length: { minimum: 2 } 

end
