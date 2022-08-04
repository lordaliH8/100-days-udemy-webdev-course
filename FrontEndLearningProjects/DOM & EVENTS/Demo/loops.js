for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["ali", "amir", "reza"];

for (const i of users) {
  console.log(i);
}

const loggedInUser = {
  name: "max",
  age: 32,
  isAdmin: true,
};

for (const propertyName in loggedInUser){
    console.log(propertyName)
    console.log(loggedInUser[propertyName])
}

let finisher= false
while (!finisher) {
    finisher = confirm('Do you want to quit?')
}

console.log('done')