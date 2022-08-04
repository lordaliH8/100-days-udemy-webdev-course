// first part (SumNUmbers!)

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberElement = document.getElementById("user-number");
  const enteredNumber = userNumberElement.value;
  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

//highlight paragraph

const highlightLinksButtinElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtinElement.addEventListener("click", highlightLinks);

//display data

const displayDataButton = document.querySelector("#user-data button");

const dummyData = {
  firstName: "ali",
  lastName: "alp",
  age: 22,
};

function displayData() {
  const outputDataElement = document.getElementById("output-user-data");
  outputDataElement.innerHTML = "";
  for (const key in dummyData) {
    const newUserDataItemElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyData[key];
    newUserDataItemElement.textContent = outputText;
    outputDataElement.append(newUserDataItemElement);
  }
}

displayDataButton.addEventListener("click", displayData);

//Role The Dice !

const rollDiceButtonElement = document.querySelector('#statistics button')

function rollDice() {
    return Math.floor(math.random()*6) + 1
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number')
    const diceRollsListElement = document.getElementById('dice-rolls')
    const enteredNumber = targetNumberInputElement.value
   
    diceRollsListElement.innerHTML = ''

    let hasRolledTargetNumber = false
    let numberOfRolls = 0
    while(!hasRolledTargetNumber) {
        const rolledNumber = rollDice()
        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // }

        numberOfRolls++
        const newRollListElement = document.createElement('li')
        const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber
        newRollListElement.textContent = outputText
        diceRollsListElement.append(newRollListElement)

        //we can store the result of comparison in JavaScript!
        hasRolledTargetNumber = rolledNumber == enteredNumber
     
    }
    const outputTotalRollsElement = document.getElementById('output-total-rolls')
    const outputTargetNumberElemenet = document.getElementById('output-target-number')

    outputTotalRollsElement.textContent = enteredNumber
    outputTargetNumberElemenet.textContent = numberOfRolls
}

rollDiceButtonElement.addEventListener('click',deriveNumberOfDiceRolls)