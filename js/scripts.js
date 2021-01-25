$(document).ready(function() {
  const userSentence = prompt("Please enter a sentence without punctuation :");
  
  function firstLastCapitalize(sentence) {
    return sentence.slice(0, 1).toUpperCase() + sentence.slice(-1).toUpperCase();
  };
  const firstLast = firstLastCapitalize(userSentence);
  
  function reverse(letters) {
    return letters.split("").reverse().join("");
  };
  
  function countDivide(sentence) {
    const index = Math.floor(userSentence.length / 2)
    return userSentence[index];
  }

  function output(letters) {
    return reverse(countDivide(userSentence) + userSentence + reverse(letters) +".");
  };

  console.log(output(firstLast));

});