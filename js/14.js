function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;
  propCount = Object.keys(object).length

  return propCount;
  // Пиши код выше этой строки
}
console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }) );
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));


// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const keys = Object.keys(object);
//   for (const key of keys) {
    
//       propCount += 1;
    
//   }

//   return propCount;
//   // Change code above this line
// }