require 'sinatra'
require 'sinatra/activerecord'
require 'json'
require 'sinatra/flash'

set :database, "sqlite3:googlebooks.sqlite3"
set :sessions, true
require './models'
get '/' do
  erb :home
end
# post '/' do
#   username=params[:username]
#   password=params[:password]
#   user=User.where(username: username).first
#   user.password==password ? erb :home : erb :sign_in
# end


get '/search' do
  
end
