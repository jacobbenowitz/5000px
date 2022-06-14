class ApplicationController < ActionController::Base

  helper_method :current_user, :current_profile, :logged_in?

  # User only used for user auth
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  # Profiles used for all associations
  # def current_profile
  #   return nil unless session[:session_token]
  #   current_user ||= User.find_by_session_token(session[:session_token])
  #   return @profile = current_user.profile
  # end

  def login!(user)
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  # def require_logged_in
  #   redirect_to ... unless logged_in?
  # end

  # def require_logged_out
  #   redirect_to ... if logged_in?
  # end


end
