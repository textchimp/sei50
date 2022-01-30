class SessionController < ApplicationController
  def new
  end

  def create

    # raise 'hell'

    # 1. Check if the email address entered is actually in the DB
    user = User.find_by email: params[:email]

    # 2. Did we actually find a user row for that email address (or was it nil),
    # AND if we did find a user, is the password the correct one for that user?
    if user.present? && user.authenticate( params[:password] )

      # credentials are correct - successful login!
      raise 'CORRECT!'

    else

      # Either the was nil (no such email address), or the password entered into
      # the login form, when encrypted, did not match the password_digest stored
      # for this account
      raise 'NOPE!'


    end # credentials check



  end # create()

  def destroy
  end
end
