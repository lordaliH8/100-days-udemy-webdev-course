let paragraphElement = document.querySelector("p");

function f1() {
  paragraphElement.textContent = "clicked!";
}

paragraphElement.addEventListener("click", f1);

let input = document.querySelector("input");

function userInput(event) {
  let enteredText = input.value;
  console.log(enteredText)
}

input.addEventListener("input",userInput);
