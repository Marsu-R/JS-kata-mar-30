// The goal of this exercise is to convert a string
//to a new string where each character in the new string
//is "(" if that character appears only once in the original
//string, or ")" if that character appears more than once in
//the original string. Ignore capitalization when determining
//if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let input = word.toLowerCase();
  let result = "";

  for (let i = 0; i < input.length; i++) {
    let index = input.indexOf(input[i]);
    let lastIndex = input.lastIndexOf(input[i]);
    let letter = input[i];

    if (index === lastIndex) {
      result += input[i].replace(letter, "(");
    } else {
      result += input[i].replace(letter, ")");
    }
  }
  return result;
}

console.log(duplicateEncode("din"));
