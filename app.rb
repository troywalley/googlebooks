before  do
	@current_user = session[:user_id] if session[:user_id]
end
	
get '/' do

  erb :sign_in
end

get '/sign_up' do

	erb :sign_up
end

post '/sign_in' do
end

post '/sign_up' do
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
