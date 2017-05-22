require 'sinatra'
require 'sinatra/activerecord'
require 'json'
require 'sinatra/flash'

set :database, "sqlite3:googlebooks.sqlite3"
set :sessions, true
require './models'
<<<<<<< HEAD


get '/' do

	erb :home
end

# get '/' do
#   erb :sign_in
# end
=======
get '/' do
  erb :home
end
>>>>>>> 830573be1202008676151164a8aebf1cc711d44c
# post '/' do
#   username=params[:username]
#   password=params[:password]
#   user=User.where(username: username).first
#   user.password==password ? erb :home : erb :sign_in
# end
