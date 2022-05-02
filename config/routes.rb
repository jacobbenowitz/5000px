Rails.application.routes.draw do
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:show, :create, :destroy]
    resources :profiles, only: [:index, :create, :show, :update]
    resources :photos, only: [:create, :show, :update, :index, :destroy]
    resources :profile_photos, only: [:create, :show]
  end



  root to: "static_pages#root"

end
