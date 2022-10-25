// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (word.toLowerCase() === element.toLowerCase()) {
      wordCount++;
    }
  });
  return wordCount;
}




function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});



// function omitPunctuation(text) {
//   const punctuation = [",", ".", "!", "?"];
//   let newWord = text.split("");
//   punctuation.forEach(function(punct) {
//     if (newWord.includes(punct)) {
//       newWord.pop();
//     } else if (newWord.includes("'")) {
//       newWord.pop()
//       newWord.shift();
//     }
//   });

//   return newWord.join("");
// }

// function omitBleep(badWord, textPassage) {
//   let textPassageArray = textPassage.split(" ");
//   let newArray =[];
  

//   textPassageArray.forEach(function(text) {
//     //"muppeteer".includes("muppeteer,")
//     if (badWord.includes(omitPunctuation(text))) {
//       //do nothing
//     } else {
//       newArray.push(omitPunctuation(text))
//     }
//   });

//   return newArray.join(" ");
// }


// function badWordRemover(word, text) {

//   const textArray = text.split(" ");
//   console.log(textArray)


//   textArray.forEach(function(element) {

//     if (element.toLowerCase().includes(word)) {
//       console.log(element)
//       console.log(word)
//       element = "";
//       console.log(element);
//     }
//   });

//   const newText = textArray.join(" ");

//   return newText;
// };

// function badWordRemover(word, text) {
//   const textArray = text.split(" ");
//   let wordCount = 0;
//   const omitWords =["zoinks", "muppeteer", "biffaroni", "loopaloop"];
//   textArray.forEach(function(element) {
//     if(element === omitWords ){
//       element.replace(omitWords, "")
//       wordCount++;
//     }
//   });
//   return wordCount;
// }