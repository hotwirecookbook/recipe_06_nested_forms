Rails.application.routes.draw do
  root "recipes#index"
  
  resources :recipes
  namespace :recipes do
    resources :ingredients, only: [:new, :destroy]
  end

  resources :ingredients, only: [:destroy]
end
