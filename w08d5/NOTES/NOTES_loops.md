# LOOPS

# block of code is denoted with a do..end

i = 0
loop do 
  i = i + 1
  puts "hello #{i}"

  break if i >= 10
end


# while loop

i = 0
while (i < 10) do 
  i = i + 1
  puts "hello #{i}"

  break if i >= 10
end


# until loop

i = 0
until (i > 10) do 
  i = i + 1
  puts "hello #{i}"

  break if i >= 10
end


names = ['alice', 'bob', 'carol']

for name in names do
  puts "hello there #{name}"
end

names.each do |name|                 # notice the pipes instead of () for accepting a parameter here
  puts "hello there #{name}"
end
 
10.times do
  puts "Monkey Fuzz"
end

