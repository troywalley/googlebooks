require 'sinatra'
require 'sinatra/activerecord'
require 'json'
require 'sinatra/flash'

set :database, "sqlite3:googlebooks.sqlite3"
set :sessions, true
require './models'


# get '/' do
#   erb :sign_in
# end

get '/' do
  erb :home
end



post '/home' do
  url=params[:url]
  book=Book.create(user_id: 1, url: url)
  book.to_json
end

# post '/' do
#   username=params[:username]
#   password=params[:password]
#   user=User.where(username: username).first
#   user.password==password ? erb :home : erb :sign_in
# end
