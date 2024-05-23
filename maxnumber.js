var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];


const maxnumber = (array) => {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
};
console.log(maxnumber(numbers))