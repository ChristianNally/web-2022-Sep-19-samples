# BLOCKS AND LAMBDAS

names = ['Alice', 'Bob', 'Charlie']


# block of code is a repetitive chunk of code denoted with a do..end

loop do |name|
  puts name
end

# a proc is a block stored in memory and does NOT care how many parameters are passed into it

my_block = Proc.new do |name|
  puts name
end

names.each &my_block

# a lambda is a block stored in memory and DOES care how many parameters are passed into it

my_block = Proc.new do |name|
  puts name
end

##
