/* 10 06 2023 practices

const interval = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);

*/

/* 11 06 2023 practices

function sqare(value) {
  console.log(value*value);
}

function testcallback(number, callback){
  setTimeout(() => {
    callback(number, number*4);
  },Math.random()*2000)
};

testcallback(0, (value,result) => {
  console.log(value,result);
    testcallback(1, (value,result) => {
    console.log(value,result);
      testcallback(2, (value,result) => {
      console.log(value,result);
        testcallback(3, (value,result) => {
        console.log(value,result);
        })
      })
    })

});
*/

/* 12 06 2023 practices */

/* S;M;plasticCup()    plastic cup

C;V;mobile phone   mobilePhone

C;C;coffee machine   CoffeeMachine

S;C;LargeSoftwareBook    large software book

C;M;white sheet of paper    whiteSheetOfPaper()

S;V;pictureFrame   picture frame */

const input = 'S;M;plasticCup()'
+ '\nC;V;mobile phone'
+ '\nC;C;coffee machine'
+ '\nS;C;LargeSoftwareBook'
+ '\nC;M;white sheet of paper'
+ '\nS;V;pictureFrame';

function processData(input) {
  // Enter your code here
  const patron = /[A-Z]/g;
  const arrayTotal = input.split('\n');
  let array = [];
  let stringOut = '';
  let out = '';

  arrayTotal.forEach((element/* , index */) => {
    array = element.split(';');

    if (array[0] === 'S') { // here is S
      if (array[1] === 'M') {
        array[2] = array[2].slice(0, -2);
      }

      const arrayWord = array[2].split('');

      for (let ii = 0; ii < arrayWord.length; ii += 1) {
        if (arrayWord[ii].match(patron)) {
          arrayWord.splice(ii, 0, ' ');
          ii += 1;
        }
      }

      stringOut = arrayWord.join('').toLowerCase().trim();
    } else { // here is C
      const arrayWord = array[2].split('');

      for (let jj = 0; jj < arrayWord.length; jj += 1) {
        if (arrayWord[jj] === ' ') {
          arrayWord[jj + 1] = arrayWord[jj + 1].toUpperCase();
        }
      }

      if (array[1] === 'C') {
        arrayWord[0] = arrayWord[0].toUpperCase();
      } else if (array[1] === 'M') {
        arrayWord.push('()');
      }

      stringOut = arrayWord.filter((letter) => letter !== ' ').join('');
    }

    // (index !== arrayTotal.length - 1)? out = `${out + stringOut}\n` : out = `${out + stringOut}`;
    out = `${out + stringOut}\n`;
  });

  return console.log(out);
}

processData(input);

const ar = [1, 3, 2, 6, 1, 2];
const n = ar.length;
const k = 3;
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let out = 0;

  for (let ii = 0; ii < n; ii += 1) {
    for (let jj = ii + 1; jj < n; jj += 1) {
      if ((ar[ii] + ar[jj]) % k === 0) {
        out += 1;
      }
    }
  }

  return console.log(out);
}

divisibleSumPairs(n, k, ar);