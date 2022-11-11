# CLASSES

class Car
  def initialize color, year, model
    @color = color
    @year = year
    @model = model
  end

  # def color= value
  #   @color = value
  # end

  # def color
  #   return @color
  # end

  # attr_reader :year
  # attr_writer :model
  attr_accessor :color, :year, :model

end

my_car = Car.new "red", "2022", "Matrix"

my_car.color = 'Green'
my_car.model = 'Porche'

p my_car
p "Here is my colour: #{my_car.color}"
p "Here is my year: #{my_car.year}"


