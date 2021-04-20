function calculateTotal(number) {

     let sum = 0;
    for (let i = 0; i <= number; i +=1 ) { 
 
        sum +=i;
        
       }

   return sum;
  
 };

 console.log(calculateTotal(1));
console.log(calculateTotal(3));
 console.log( calculateTotal(7));
 console.log(calculateTotal(18));
 console.log(calculateTotal(24));
 console.log(calculateTotal(4));

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);