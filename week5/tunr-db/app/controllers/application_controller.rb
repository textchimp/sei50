class ApplicationController < ActionController::Base

  # A befor_action that is set here in ApplicationController
  # will be run before ANY action of ANY controller
  before_action :fetch_user


  def fetch_user

    # Check if the user_id in the sesion hash is set,
    # and if it is the ID of an actual user in our
    # users table; if it is, get the row object for
    # that user and save it into @current_user which
    # any action's code can access
    # if the ID is NOT a current ID, consider it invalid
    # and delete the session! - this will prevent weird
    # errors with stale user_ids when re-seeding our DB
    # (or when users delete accounts)

    if session[:user_id].present?
      @current_user = User.find_by id: session[:user_id]
    end # session check

    # If we did get nil (no such user) from the above query,
    # then delete the session (since the ID is invalid)
    session[:user_id] = nil   unless @current_user.present?

    # if @current_user.nil?
    #   sesion[:user_id] = nil
    # end


  end  # fetch_user()


end  # class ApplicationController
