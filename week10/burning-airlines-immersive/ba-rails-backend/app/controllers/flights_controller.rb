class FlightsController < ApplicationController

  def index
    render json: Flight.all
  end # index


  def search

    flights = Flight.where origin: params[:origin], destination: params[:destination]

    render json: flights, include: {
      airplane: {
        only: [ :name ]
      }
    }

  end # search


  def show
    flight = Flight.find params[:id]

    render json: flight, include: {
      # "When you give me a flight, include the .airplane belongs_to association"
      airplane: {},
      # "When you give me a flight, also include the .reservations has_many association"...
      reservations: {
        only: [ :row, :col, :user_id ],  # leave out all the reservation fields but these ones
        include: {
          # ....and when you give me each reservation for a flight, ALSO give me the
          # nested .user belongs_to association for each reservation
          user: {
            # except: [ :password_digest ]  # ....but don't publish the user passwords to the frontend!
            only: [ :name ]
          }
        }
      } # reservations
    } # top-level include for flight

  end # show


end
