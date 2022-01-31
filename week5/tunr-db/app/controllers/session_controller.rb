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
      session[:user_id] = user.id

      redirect_to root_path   # back to the home page

    else

      # Either the was nil (no such email address), or the password entered into
      # the login form, when encrypted, did not match the password_digest stored
      # for this account


      # The flash hash is a bit like 'session' in that it is remembered across
      # page requests, i.e. into the future - BUT ONLY for the very next page
      # load, and then not beyond that. This allows us to show error or status
      # messages about something that happened on the previous request - i.e.
      # show an error message when redirected to this login fon (or, for example
      # when successfully creating an item and being redirected to the index
      # page we can say 'Item created successfully').
      flash[:error] = 'Invalid email or password'

      redirect_to login_path

    end # credentials check



  end # create()

  def destroy
    session[:user_id] = nil  # logs out the user
    redirect_to login_path   # back to the login page
  end

end
