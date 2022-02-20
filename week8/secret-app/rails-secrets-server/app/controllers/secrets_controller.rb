class SecretsController < ApplicationController

  skip_before_action :verify_authenticity_token, raise: false

  def index
    # Set a response header to tell the browser that this route
    # can be loaded by JS in an AJAX request
    # (avoid CORS security check)
    headers['Access-Control-Allow-Origin'] = '*'
    render json: Secret.all.reverse
  end # index


  def create
    secret = Secret.create content: params[:content]

    if secret.persisted?
      render json: secret
    else
      # TODO: respond with appropriate error code
      render json: { error: 'could not create secret' }, status: 422
    end

  end # create


end # class SecretsController
