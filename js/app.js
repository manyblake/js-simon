const randomNumbers = [];
const userNumbers = [];
const numberGuessed = [];
let score = 0;

function randomNumbersGenerator() {
  do {
    let n = Math.floor(Math.random() * 100);
    if (!randomNumbers.includes(n)) {
      randomNumbers.push(n);
    }
  } while (randomNumbers.length < 5);
}

function tryToGuess() {
  do {
    let userEntry = parseInt(prompt(`Inserisci un numero da 0 a 99`));
    if (userEntry === NaN) {
      userNumbers.push(`100`);
      console.log(userNumbers);
    } else if (userNumbers.includes(userEntry)) {
      alert(`Hai già inserito questo numero`);
    } else if (userEntry <= 99) {
      userNumbers.push(userEntry);
    }
  } while (userNumbers.length < 5);

  for (let i = 0; i < 5; i++) {
    if (randomNumbers.includes(userNumbers[i])) {
      score++;
      numberGuessed.push(userNumbers[i]);
    }
  }

  if (!numberGuessed[0]) {
    alert(`Non hai indovinato nessun numero`);
  } else {
    alert(`Hai indovinato ${numberGuessed} per un totale di ${score} numeri`);
  }
}

randomNumbersGenerator();
alert(randomNumbers);
setTimeout(tryToGuess, 3000);
