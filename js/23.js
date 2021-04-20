function filterArray(numbers, value) {
    const newNumbers = [];

    for (const number of numbers) {
    
    if (number > value) {
     newNumbers.push(number);
       }
    
    }

return newNumbers;
  
}
console.log(filterArray([1, 2, 3, 4, 5], 3) );
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
console.log(filterArray([10, 4, 8, 1, 6], 5));