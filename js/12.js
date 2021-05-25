function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
//  эта задача приняла с length

      // propCount = Object.keys(object).length;
     for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  

  // Пиши код выше этой строки
  return propCount;
}


console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for(const key in object){
//   if (object.hasOwnProperty(key)) {
//     console.log([key].length);
//   propCount+=[key].length;     }

// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));