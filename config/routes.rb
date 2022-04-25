Rails.application.routes.draw do
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :profiles, only: [:create, :show]
  end


  root to: "static_pages#root"

end
