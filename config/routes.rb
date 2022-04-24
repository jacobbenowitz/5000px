Rails.application.routes.draw do
  
  namespace :api, defaults: { format: :json } do 
    resources :users
    resources :profiles, only: [:create, :show]
    resource :session, only: [:new, :create, :destroy]
  end


  root to: "static_pages#root"

end
