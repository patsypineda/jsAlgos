const arr1 = [1, 2, 3, 4, 5]
const arr2 = [2, 3, 4, 5, 6, 6]
const arr3 = [2, 2, 3, 1, 9, 4, 8, 5, 6, 6, 7, 7, 7, 7 ]
const string1 = 'Hello Beautiful World'
const string2 = 'Cat hat bye'

// .forEach()
// Allows callback function to mutate array
const doubleArray = (arr) => (
  arr.forEach((val, index) => arr[index] = val * 2))
doubleArray(arr2)
console.log(arr2) /// [4, 6, 8, 10, 12]

//.reduce()
//Returns a single culmulative value
const getArraySum = (arr) => (
  arr.reduce((sum, val) => sum + val, 0)
)
console.log(getArraySum(arr1)) //15

//.map()
//Transforms values to new set of values. Returns new array and does not mutate original.
const halfArray = (arr) => (
  arr.map(val => val/2)
)
console.log(halfArray(arr2)) // [2, 3, 4, 5, 6]

//Return the longest word in a string
const findLongestWord = (string) => {
  let longestWord = ''
  string.split(' ').map((word, i) => {
    if (longestWord.length < word.length) {
      longestWord = word
    }
  })
  return longestWord.length > 0 ? longestWord : 'String is empty'
}
console.log(findLongestWord(string1)) //Beautiful

//.filter()
//Can select a subset of values. Return is a boolean. filter() will return a new array with all values that returned true.
const getOdd = (arr) => (arr.filter(val => val % 2 !== 0))
console.log(getOdd(arr1))

//Other
const findMedian = (arr) => {
  {const middleIndex = Math.floor(arr.length/2)
  arr.sort((a, b) => a-b)
  if (arr.length % 2 === 0) {
    return ((arr[middleIndex] + arr[middleIndex-1]) / 2 )
  }
  else {
    return arr[middleIndex]
  }
}}
console.log(findMedian(arr3))

const mode = (array) => {
  const obj = new Object();
  let maxFreq = 0
  let mode
   array.forEach((item) => {
    let freq = obj[item]? obj[item] : 0
    console.log(obj)
    freq++;
    if(freq > maxFreq) {
      maxFreq = freq
      mode = item
    }
    obj[item] = freq
  })
  return mode
}

const testArray = [1, 1, 1, 2, 3, 5, 8, 13];
console.log(`Mode of [${testArray}] is ${mode(testArray)}.`);
