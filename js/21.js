function findLongestWord(string) {
        const massFromString = string.split(' ');
    // console.log(massFromString);
        let longestWord = massFromString[0];

        for ( const element of massFromString) {
            // console.log(element);

            if (element.length > longestWord.length) {
                longestWord = element;
            }
        }

       return longestWord;


}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
console.log(findLongestWord('Find a cat'));


//  ******************************************


// const wordsMasiv = string.split(' ');
    // let max = wordsMasiv[0];

    // for (let i = 0; i < wordsMasiv.length; i += 1){

    //     if (wordsMasiv[i].length > max.length) {
    //         max = wordsMasiv[i];

    //     }
    // }

    // return max;