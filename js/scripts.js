// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
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