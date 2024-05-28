function LongestWord(sen) { 
 
  let words =  sen.split(' ')
 
  let longestword = '';
  words.forEach(word => {
    const alphanumericWord = word.replace(/[^0-9A-Z]/gi,'')
    if ( longestword.length < alphanumericWord.length) {
        longestword = alphanumericWord
    }
  })
  return longestword  
}
   
// keep this function call here 
console.log(LongestWord("Hello world123 567"));

// Question
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers,

// optimal runtime O(n) 
// This user scored higher than 33.2% of users who solved this challenge.