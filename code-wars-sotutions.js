// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

//Multiples of 3 or 5
function solution(number){
  let sum = 0;
  if (number < 0){
    return 0;
  }
  for(let i = 0; i<number; i++){
    if (i % 3 === 0 && i % 5 === 0){
      sum+=i;
    }
    else if (i % 3 === 0 || i % 5 === 0){
      sum+=i;
    }
    
  }
  return sum;
}

/*
in line 2 I intialize a variable to hold the running sum starting at 0
line 3 is for edge case in case number is negative, to return 0
line 6-16 is a for loop up to but not including the number
for each loop:
checks to see if multiple of 3 AND 5 first, so that it is not repeatedly added to sum, adds to sum
last conditional checks if multiple of 3 or 5 respecfully, adds to sum
finally out of for loop we return sum
*/

//Who likes it?
function likes(names) {
  if (names.length === 0) return "no one likes this";
  else if (names.length === 1) return `${names[0]} likes this`;
  else if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  else if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
/*
For this function I just use a else if chain for all possible cases which are 0, 1, 2, 3, and 4 or more cases.
Line 2, if no names (empty arr has length 0) returns "no one"
Line 3, only 1 name in array, return name + 'likes this'
Line 4, only 2 names, returns name + 'and' secondName 'likes this'
Line 5, same idea but with 3 names, first and second name seperated by comma
Line 6, after the first two names are listed, names.length - 2 gives an integer naming how many other people beyodn the first 2 additionally likes this are returns names + thisAmmountMorePeople + 'like this'
*/

//Find the unique number
function findUniq(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (freq[number]){
      freq[number]++;
    }
    else {
      freq[number] = 1;
    }
  }
  for (let num in freq){
    if (freq[num] === 1) {
      return +num;
    }
  }
}

/*
Line 2, I declare an empty frequency variable
Lines 3 - 11 I use a for loop to fill in the frequency object
  for every number in the array, if the object key at that value exists I added 1 to it
  if the object key did not exist, I created the key with a value of 1
  What this does is it counts how many times a number is repeated and stores it into its key value 
    If the key value is greater than 1, its a repeat
    If the key value is equal to 1, its unique
Line 12 - 16 I use a for ... in loop
  Inside I check every object key and find which key has a value of 1
  I return that number but since its an object key name I use + to coerce it into an integer
*/

//Find The Parity Outlier
function findOutlier(integers){
//   if (integers[0] % 2 === 0 && integers[1] % 2 === 0) {
//     return integers.filter(num => Math.abs(num) % 2 === 1)[0]
//   }
//   else if (integers[0] % 2 !== 0 && integers[1] % 2 !== 0){
//     return integers.filter(num => Math.abs(num) % 2 === 0)[0]
//   }
//   else if (integers[1] % 2 === 0 && integers[2] % 2 === 0) {
//     return integers[0];
//   }
//   else if (integers[1] % 2 !== 0 && integers[2] % 2 !== 0) {
//     return integers[0];
//   }
//   else if (integers[0] % 2 === 0 && integers[2] % 2 === 0) {
//     return integers[1];
//   }
//   else if (integers[0] % 2 !== 0 && integers[2] % 2 !== 0) {
//     return integers[1];
//   }
  let even = integers.filter(num => num % 2 === 0).length;
  let odd = integers.filter(num => num % 2 !== 0).length;
  if (even === 1) {
    return integers.filter(num => num % 2 === 0)[0]
  }
  else {
    return integers.filter(num => num % 2 !== 0)[0]
  }
}

/*

Both solutions work. Only after finishing the first one did I realize I could have done a more simple solution. I will explain both. 
1st Solution.)
  I created an else if chain that went over every order of numbers. 
    1.) First case would return the first odd number in the array if the first two integers were even 
    2.) Second case would return the first even number in the array if the first two integers were odd
    3.) If the second and third integer was even, then that means that the first integer was odd, return first
    4.) If the second and third integer was odd, then that means that the first integer was even, return first
    5.) If the first and third integer was even, then that means the second integer is odd, return second
    6.) lastly if the first and third integer was odd, then that means the second integer was even, return second

2nd Solution.)

  variable even held the length of a filtered array of all even numbers
  varibale odd held the length of a filtered array of all odd numbers
  There are two outcomes to this, a variable with a value of 1, and a variable with a value of 2 or more
  If even was equal to 1, meaning it was unique, I would return the first value in the orignal array that was even 
  else statemtn is if odd was equal to 1, meaning it was unique, I would return the first value in the orignal array that was odd 
*/

//Counting Duplicates
function duplicateCount(text){
  let freq = {};
  for (let char of text.toLowerCase()){
    if (freq[char]){
      freq[char]++;
    }
    else {
      freq[char] = 1;
    }
  }
  let count = 0; 
  for (let uniq in freq) {
    if (freq[uniq] > 1) {
      count++;
    }
  }
  return count;
}
/*

In Line 2 I created an empty frequency obj
From lines 3-4 I use a for...of loop 
  I loop for every character inside the text (text.toLowerCase() is used so that lower and upper case letter count towards the same key)
  If a key of that character exist I add 1 to it
  If the key of that character doesn't exist I create a new key, and set its value to 1
  What this does is creates an object with each key representing a unique character and its value representing how many times it appears in text
Then I create a counting variable with a initial value of 0
With a for...in loop I iterate through the object
  Using an if statement, if any object key has a value greater than 1, I add 1 to my counting variable
  A value more than 1 means it repeats, and so the number of repeated characters gets saved to my counting variable
I return the count

*/

//Moving Zeros To The End
function moveZeros(arr) {
  let newArr = [];
  let zeroCounts = 0;
  
  for (let num of arr){
    if (num !== 0){
      newArr.push(num)
    }
    else {
      zeroCounts++;
    }
  }
  if (zeroCounts > 0) {
    while (zeroCounts > 0){
      newArr.push(0)
      zeroCounts--;
    }
    return newArr;
  }
  else {
    return newArr
  }
}

/*

Initialzied an empty arr which I will later add to
Initialize a counting variable with 0, will be used to keep track of how many 0s are in arr

I use a for...of loop to got rhrough arr
  if the element is not 0 I push it to newArr
  else it is a 0, so I increment my counting variable

I use an if statement else statemetn, for whether there are Zeros present or not, if zeroCounts is greater than 0 they are present
  While my counting variable is still more than 0
    I push a zero to the end of new Arr
    I reduce my counting variable by 1
  The while loop should end when all zeros have been added to my arr
  So i can finally return newArr
  
  The else statment is for an arr with no Zeros so it just return newArr

*/

//Simple Pig Latin
function pigIt(str){
  str = str.split(' ').map(words => {
    if (/[a-z0-9]+/gmi.test(words)){
      return words.substring(1) + words[0] + 'ay'
      }
    else {
      return words
    }
  }) 
  return str.join(' ')
}

/*

str is a string, so I turn into an array with .split at every space and then I map it to a new array
the .map goes as follows
  if the word in the array is only composed of alphanumeric characters, ie no puncuation, then we go ahead and piglatin that word
  this is done by concatenating the substring of the second character up until the end of the words (.substring(1)) plus the first letter of the word (words[0]) plus 'ay'
  I return this to that element in the mapping
  
  Otherwise, if the regex test turns out false I just return that element since there is no reason to piglatin it
  
Finally I just return the str arry joined with spaces

*/
