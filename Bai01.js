const array = [1,2,3,1,2,1,1];
// const array = [1, 2, 3, 1, 2, 1, 1, 2, 2];
const counter = {};

function checkForDuplicates(array) {
    array.forEach(name => counter[name] ? counter[name]++ : counter[name] = 1);
    const max = Math.max(...Object.values(counter));

    const most = Object.entries(counter).filter(([name,reps]) => reps === max);
    return most
}

console.log(checkForDuplicates(array));