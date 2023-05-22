const perf = require('execution-time')();

// Time Complexity: O(n^2) -- Quadratic
// Run Time: 140.1 μs
// Space Complexity: O(1)

const addToZero = arrNum => {
    let j = 0;
    for (let i=0; i<arrNum.length;i++){
        for (let j=0 ; j<arrNum.length; j++){
            if (arrNum[i] + arrNum[j] === 0){
            return `${arrNum[i] + arrNum[j] === 0}, ${arrNum[i]} and ${arrNum[j]} = 0`
            }
        }
    } return false;
}

console.log(addToZero([1, 2, 3, -2]));  
console.log(addToZero([1, 2, 3]));    



// HAS UNIQUE CHARACTERS
// Time Complexity: O(n)
// Space Complexity: O(n)
// Run Time: 133.2 μs
const hasUniqueChars = wordStr => {
    const strSets= new Set(wordStr);
    // console.log(strSets.keys());
    if (wordStr.length === strSets.size ) {
        return true;
    }  
    return false;
}

console.log(hasUniqueChars("Moonday")); 
 // False
console.log(hasUniqueChars('Monday')); 
// True



// IsPANGRAM
// Time Complexity: O(n)
// Space Complexity: O(1)
// Run Time: 126.5 μ
const isPangram = (str) => {
    // Convert the input string to lowercase
    str = str.toLowerCase();
    const letters = new Set();
    for (let i = 0; i < str.length; i++) {
      // If the current character is an alphabet, add it to the Set
      if (/[a-z]/.test(str[i])) {
        letters.add(str[i]);
      }
    }
    // If the number of unique letters in the Set is 26, then the input string is a pangram
    return letters.size === 26;
  }


console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True
console.log(isPangram("I like cats, but not mice"));
// -> False


// FINDLONGESTWORD
// Time Complexity: O(n)
// Space Complexity: O(1)
// Run Time: 129.8 μ
perf.start();
const findLongestWord = words => {
    let longest_word_length = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest_word_length) {
        longest_word_length = words[i].length;
      }
    }
    return longest_word_length;
  }
 let result = perf.stop();


  console.log(findLongestWord(['hi','hello']));  console.log("longest 1:", result.preciseWords);
  // -> 5
  console.log(findLongestWord(['apple', 'banana', 'cherry', 'durian', 'elderberry'])); console.log("longest 2:", result.preciseWords);
  // -> 10