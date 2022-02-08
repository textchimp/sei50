
require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  describe 'GET #index' do

    it 'returns HTTP success' do
      get :index  # actually simulate a browser request
      expect( response ).to have_http_status( :success )
    end




  end #  GET #index


end  # describe FruitsController
