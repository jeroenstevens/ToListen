ToListen::Application.routes.draw do
  scope "api" do
    resources :artists#, :defaults => {:format => "json"}
  end

  root to: 'main#index'
  get '*path', to: 'main#index'

  #mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
end
