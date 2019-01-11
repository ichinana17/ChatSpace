Rails.application.routes.draw do
  get 'chatspace' => 'messages_controller#index'

end
