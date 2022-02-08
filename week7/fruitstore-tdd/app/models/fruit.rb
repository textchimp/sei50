class Fruit < ApplicationRecord

  belongs_to :shelf

  validates :name, presence: true

  def squishy?
    false
  end

end
