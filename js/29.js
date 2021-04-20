function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
 
    const newNumbers = [];

    for (let i = start; i <= end;i +=1 ) {
        if (i % 2 === 0) {
            // newNumbers.push([i+=1]);
            // console.log(i);
            newNumbers.push(i);
        }

        }
    return newNumbers;
    
    // Пиши код выше этой строки
}
console.log( getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log( getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));
console.log(getEvenNumbers(4, 7));