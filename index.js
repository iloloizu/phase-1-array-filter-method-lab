// Code your solution here

// function findMatching(driver) {
//     return driver.filter(driver => {
//         return drivers === driver
//     });
// }

function findMatching(source, sought) {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
}