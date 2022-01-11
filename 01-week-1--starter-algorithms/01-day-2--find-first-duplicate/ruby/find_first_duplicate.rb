def find_first_duplicate(arr)
  if arr.empty? 
    return -1;
  end
  hash = Hash.new(0)
   arr.each do |e|
    hash[e] += 1
     return e if hash[e] > 1
      end
    return -1
  end


if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
#1. Check to see if array length is 0
#2. If yes, return -1
#3. Create an empty hash
#3. Iteratere through the array. 
#4. Create a key that equals the corresponding value from arr
#5. Add 1 to the value for each key
#6. if value for each key is greater than 1, return that value
#7. if not, return -1


# And a written explanation of your solution
#We first checked to see if the array was empty to avoid unecessary work. 
#We used a hash table because we can store key/value pairs
#by storing key/value pairs, we are checking to see when we get to a value that's greater than 1(we are using O(n) time)
#After we store the key value/pairs, we are adding 1 to the value of that current iteration(the key)
#Once we get to a value of 2, returning that key (that breaks out of the loop)
