# CONDITIONALS

limit = 5
num = 10

if num < limit
  p 'all good'
else
  p 'Limit reached or exceeded'
end

# if (!valid) {
#   console.log('Try again!');
# }

# unless valid
#   p 'Try again!'
# end

# if (num < 5) { console.log('num < 5'); }
# console.log('try again.');

p 'num < 5' if num < 5
p 'num >= 5' if num >= 5

p 'num is good' unless num > 12
