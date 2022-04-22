const array = [1,2,3,1,2,1,1];
// const array = [1, 2, 3, 1, 2, 7, 7, 1, 1, 4, 5];
const counter = {};

function Delete(array) {
    array.forEach(name => counter[name] ? counter[name]++ : counter[name] = 1);

    const min = Math.min(...Object.values(counter));
    const max = Math.max(...Object.values(counter));

    const medium = Object.entries(counter).filter(([name, reps]) => reps !== min && reps !== max);
    return medium
}
console.log(Delete(array));
