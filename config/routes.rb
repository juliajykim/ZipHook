# == Route Map
#

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :houses do
      member do
        post :save, to: "houses#saving", as: "save"
        post :unsave, to: "houses#unsaving", as: "unsave"
      end
    end
    resources :cities, only: [:index]
    resources :states, only: [:index]
    resource :session, only: [:create, :destroy, :new]
  end
end
