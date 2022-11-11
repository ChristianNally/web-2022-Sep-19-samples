# CLASSES

class Car

end



## in OOP, you talk to the object
## Car.new in Ruby vs. new Car() in JS

car = Car.new

puts car


# a constructor is a method called initialize

class Car
  def initialize(make, model, year)
    @make = make
    @model = model
    @year = year
  end
end

# can't dot in to get the instance variable, you need to make a getter

class Car
  def initialize(make, model, year)
    @make = make
    @model = model
    @year = year
  end

  def make
    @make
  end

end


car.make = 'Dodge' # there are no operators in Ruby, they're METHODS!!
car.make=('Dodge')

## e.g. 7.< 

## helper methods attr_reader

class Car
  def initialize(make, model, year)
    @make = make
    @model = model
    @year = year
  end

  attr_reader :model  # BOTH
  attr_writer :make   # SETTER
  attr_accessor :year # BOTH

end

# Question Mark methods will always return a boolean
# Exclamation Mark methods are destructive (Hungarian Notation)

