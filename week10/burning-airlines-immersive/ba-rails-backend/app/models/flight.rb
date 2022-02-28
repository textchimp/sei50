class Flight < ApplicationRecord
  belongs_to :airplane
  has_many :reservations
  has_many :users, through: :reservations
end
