// Code your solution here
let findMatching = (arr, string) => {
    return arr.filter(entry => (
        entry.toLowerCase() === string.toLowerCase()
    ));
}

let fuzzyMatch = (arr, string) => {
    return arr.filter(entry => (
        entry.slice(0, string.length) === string
    ));
}

let matchName = (arr, string) => {
    return arr.filter(entry => (
        entry.name === string
    ));
}