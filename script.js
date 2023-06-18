let age = prompt('You are already 18');
if (age >= 18) {
  console.log('Please')
} else if (age < 18) {
  console.log('Fuck off')
}


const number = prompt("Введите число?");
if (number % 2 === 0) {
  console.log("число является четным.");
} else {
  console.log("число является нечетным.");
}


const name = prompt("Введите ваше имя:");

if (name.charAt(0).toUpperCase() === 'A') {
  console.log("Welcome, " + name + "!");
} else {
  console.log("доступ отказан.");
}
