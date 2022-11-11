# LOOPS

i = 0

# loop do
#   i = i + 1
#   p i
#   break if i > 10
# end

while i <=10
  p i
  i += 1
end

3.times do
  p 'Mnkey Fuzz'
end

names = ['Alice', 'Bob', 'Carlie', 'Dan']

names.each do |name|
  p "Hello #{name}" # `Hello ${name}`
end

(5..10).each do |num|
  p "Launch #{num} rockets!" 
end
