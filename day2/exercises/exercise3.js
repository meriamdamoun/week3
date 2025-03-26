let number = prompt("Enter a number:");
number = Number(number);

while (number < 10) {
    number = Number(prompt("Number is too small! Enter a new number:"));
}
alert("Great! You entered " + number);
