// Code your solution here
let findMatching = (arr, string) => {
    return arr.filter(function(entry) {
        return entry.toLowerCase() === string.toLowerCase();
    });
}

let fuzzyMatch = (arr, string) => {
    return arr.filter(function(entry) {
        return entry.slice(0, string.length) === string;
    });
}

let matchName = (arr, string) => {
    return arr.filter(function(entry) {
        return entry.name === string;
    });
}