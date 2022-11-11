# HASHES

## collection of key/value pairs: object, hash, dictionary, associative array

user = {
  "username" => "monkey",
  "password" => "fuzz"
}

## Can NOT use dot notation, must use square brackets! (dot is for methods)

p user['username']

## This is slow because 'username' is an object. Almost EVERYTHING is an object ... e.g.

10.methods

## ... except Symbols, which are lightweight strings

user = {
  :username => 'mary',
  :password => 'chain'
}

p user
p user[:username]

key = 'password'
p user[key.to_sym]

## Notice that they backported JS syntax for building HASHES

user = {
  username: 'peter',
  password: 'jones'
}

## ... but no 'hash rockets' there. Either way these are NOT OBJECTS

