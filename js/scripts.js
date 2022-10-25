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


function badWordRemover(badWord, textPassage) {
  const badWordArray = textPassasge.split(" ");
  let newArray = [];
  textPassageArray.forEach(function (text) {
    badWordArray.forEach(function (word) {
      if (word.toUpperCase() !== text.toUpperCase()) {
      } else {
        newArray.push(text);
      }
    });
  });

  console.log(newArray);
  return newArray.join(" ");