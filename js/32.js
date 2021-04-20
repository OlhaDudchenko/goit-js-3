function includes(array, value) {
  
    // for (const element of array) {
    //   if (element === value) {
    //       return true;
    //   }
    //     }
    //   return false;
    for (let i = 0; i < array.length; i += 1) {
        console.log(array[i]);
         if (array[i] === value) {
             return  true;
         }
    }
     return false;
}
console.log( includes([1, 2, 3, 4, 5], 3));
console.log( includes([1, 2, 3, 4, 5], 17) );
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));
console.log(includes(['магия',  'манго', 'томато'], 'плюсы'));