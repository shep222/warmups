// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.  Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3,
// then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(string, number) {

    if (number < 3) {
        string = string.slice(0, number) + "...";
        return string;
    } else if (number > string.length) {
        return string;
    } else {
        return string.slice(0, number - 3) + "...";
    }
}


module.exports = {
    truncateString: truncateString
};
