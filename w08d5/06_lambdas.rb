# Lambdas

dogs = ['Odie', 'Lassie', 'Air Bud', 'Snoop']

do_thing = lambda { |dog| puts "#{dog} is a GOOD dog!!" }

# dogs.each do |dog|
#   puts "#{dog} is a GOOD dog!"
# end

dogs.each &do_thing

