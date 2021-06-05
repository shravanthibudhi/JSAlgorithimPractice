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
/*
console.log(yourAgeInSeconds(22));
*/

// Get first item in array

function getFirstItem(items) {
    return items[0]
}

let movies = [
    'Inception', 'Godfather', 
    'The Matrix', 'The Girl on the Train'
]
/*
console.log(getFirstItem(movies))
*/

// Label Good Movies (7-10) and Bad Movies (<6)

function badOrGoodMovie(movie_rating) {
    let movie_result;
    if (movie_rating >= 7) {
        movie_result = 'Good movie'
    } else {
        movie_result = 'Bad movie'
    }
    return movie_result;
}
/*
console.log(badOrGoodMovie(6)); // bad
console.log(badOrGoodMovie(7)); // good
console.log(badOrGoodMovie(9.2)); // good
console.log(badOrGoodMovie(2)); // bad
*/

// Check if a string is empty

function isEmptyString(some_string) {
    if (some_string == "") {
        return true
    } else {
        return false
    }
}
/*
console.log(isEmptyString("")); // Empty
console.log(isEmptyString("The Godfather")); // Not True
*/

// Finding the minimum

function findMin(numbers) {
    let minimum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i]
        }
    }
    return minimum
}
/*
console.log(findMin([5,2,9,8,7,3]))
console.log(findMin([5,8,9,8,7,3]))
*/

// Finding the maximum
function findMax(numbers) {
    let maximum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i]
        }
    }
    return maximum
}
/*
console.log(findMax([5,2,9,8,7,3,13]))
console.log(findMax([5,8,9,8,7,3]))
*/

// Sort the list in decending order given the list of movies and their ratings

function sortBestRatingsFirst(numbers) {

    //find max
    for (let j = 0; j < numbers.length - 1; j++) {
        
        max_num = numbers[j];
        max_location = j;

        for (let i = j; i < numbers.length; i++) {
            if (numbers[i] > max_num) {
                // Know max and its index 
                max_num = numbers[i]
                max_location = i
            }
        }

        // swap the first and the last
        numbers[max_location]  = numbers[j] // --> Replacing the last number with the first
        numbers[j] = max_num // --> Replacing the first number with the current Max 
    }

    return numbers
}
/*
console.log(sortBestRatingsFirst ([5,8,2,9,3,10]))
*/

// Using a helper function
function findMaxHelper(numbers, start) {
    let maximum = numbers[start];
    let max_location = start;

    for (let i = start; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i]
            max_location = i
        }
    }
    return {max_number: maximum, max_index: max_location}
}

/*
console.log(findMaxHelper([5,2,9,3,7], 3))
*/

function sortBestWithHelper(numbers) {
    // Run as many times as there are items
    for (let j = 0; j < numbers.length - 1; j++) {
        
        // find max number and max location starting from j
        max = findMaxHelper(numbers, j)
        max_num = max['max_number']
        max_location = max['max_index']

        // swap the first and the max item in an array
        numbers[max_location]  = numbers[j] // --> Replacing the last number with the first
        numbers[j] = max_num // --> Replacing the first number with the current Max 
    }

    return numbers
}
/*
console.log(sortBestWithHelper([5,8,2,9,3,10]))
*/