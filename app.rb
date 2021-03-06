before  do
	@current_user = session[:user_id] if session[:user_id]
end


get '/' do
  erb :sign_in
end

get '/sign_up' do
	erb :sign_up
end
	
get '/home' do
	erb :home
end	

post '/sign_in' do
	@current_user

	user = User.where(username: params[:username]).first
	if user && user.password == params[:password]
		@current_user

		redirect '/home'
	else
		flash[:notice] = "Wrong User Name and/or Password"

		redirect '/'
	end
end

post '/sign_up' do
User.create(username: params[:username], email: params[:email], password: params[:password])

	redirect '/home'
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
