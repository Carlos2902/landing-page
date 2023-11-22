function changeText() {
    var displayElement = document.getElementById("displayText");
    var newText = generateRandomText(displayElement.textContent);
    displayElement.textContent = newText;
  }
  
  function generateRandomText(previousText) {
    var texts = [
      "We want you to be as creative as you can.",
      "This page is for you to explore the latest trends, superheroes, and more.",
      "Once you find a design that you like, click on replicate and start designing!",
      "Hint: therer are hidden codes in this website, discover them and participate on an exclusive giveaway!"
    ];
  
    var randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * texts.length);
    } while (texts[randomIndex] === previousText);
  
    return texts[randomIndex];
  }