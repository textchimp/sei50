class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|        #  in generate model command:
      t.string :name                    #  name:string
      t.string :nationality             #  nationality:string
      t.date :dob
      t.string :period
      t.text :image
      t.integer :roundness
      t.text :bio

      t.timestamps       # gives us created_at:datetime,  updated_at:datetime
    end
  end
end
