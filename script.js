// Add Numbers 

function addNumbers(num1, num2) {
    return num1 + num2;
}
/*
console.log(addNumbers(2, 5));
console.log(addNumbers(5, 5));
console.log(addNumbers(15, 5));
*/

// Convert minutes to seconds

function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}

/*
console.log(convertMinutesToSeconds(1));
console.log(convertMinutesToSeconds(3));
*/

// Convert your age in seconds 

function yourAgeInSeconds (age) {
    return age * 12 * 30 * 24 * 60 * 60;
}
// console.log(yourAgeInSeconds(22));

// Get first item in array

function getFirstItem(items) {
    return items[0]
}

let movies = [
    'Inception', 'Godfather', 
    'The Matrix', 'The Girl on the Train'
]
console.log(getFirstItem(movies))