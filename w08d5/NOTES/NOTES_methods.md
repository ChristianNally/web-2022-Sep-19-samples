# METHODS

## def is the keyword for defining a function

def say_hello (name)
  p "say hello #{name}"
end

say_hello('dean')
say_hello 'paul'

## must have the exactly expected number of arguments

say_hello 'paul', 'peter'


## return values

def gimme 
  return 42
end

return_val = gimme
p return_val

## explicit return values

def gimmeExtra 
  42
end

return_val = gimme
p return_val

