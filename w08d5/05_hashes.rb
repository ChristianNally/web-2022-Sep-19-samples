# HASHES name value pairs. 
# objects in JS, 
# hashes in Ruby, 
# associative arrays in PHP

user = {
  "username" => "monkey",
  "password" => "fuzz"
}

p user["username"]

other_user = {
  :username => 'Sandra',
  :password => 'Brazil'
}

p other_user

key = "username"
p other_user[key.to_sym]


yet_another_user = {
  username: 'Sandra',
  password: 'Kelly'
}

p yet_another_user[:username]
