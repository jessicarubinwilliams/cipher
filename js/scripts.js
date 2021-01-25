$(document).ready(function() {
  const userSentence = prompt("Enter your sentence:");
  console.log(userSentence);
  
  function firstLastCapitalize(sentence) {
    return sentence.slice(0, 1).toUpperCase() + sentence.slice(-2, -1).toUpperCase();
  };
  const firstLast = firstLastCapitalize(userSentence);
  console.log(firstLast);

  function lastFirst(letters) {
    return letters.split("").reverse().join("");
  };
  console.log(lastFirst(firstLast));
});