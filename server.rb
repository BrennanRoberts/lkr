require 'rubygems'
require "sinatra"

get "/" do
  erb :index
end

not_found do
  redirect to('/')
end