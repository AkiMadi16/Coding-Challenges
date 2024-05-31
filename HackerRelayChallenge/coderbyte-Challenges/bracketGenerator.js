// Bracket Combinations
// Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.


function BracketCombinations(num) { 
  if (num < 0) {
    return 0
  }
function generateParenthesis(n) {
    const result = [];

    function backtrack(s = '', left = 0, right = 0) {
        // Base case: If our string reaches 2n length
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }

        // Add an open parenthesis
        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }

        // Add a close parenthesis
        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }

    // Start our recursive calls
    backtrack();
    return result.length;
}
return generateParenthesis(num)

}


// [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
// Input: 3
// Output: 5
// [ '(())', '()()' ]
// Input: 2
// Output: 2
// Input: 8
// Output: 1430