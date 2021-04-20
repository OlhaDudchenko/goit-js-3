function checkFruit(fruit) {
    const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
    if (fruits.includes(fruit)) {
        return true;
    }
    return false;
}
console.log(checkFruit('слива'));
console.log(checkFruit('мандарин'));
console.log(checkFruit('груша'));
console.log(checkFruit('Груша'));
console.log(checkFruit('яблоко'));
console.log(checkFruit('kiwi'));
// ***************************************************

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}
