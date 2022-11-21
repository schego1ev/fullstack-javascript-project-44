import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

const getRandomArbitrary = (max) => Math.floor(Math.random() * max);

const checkEven = (checkNum) => checkNum % 2 === 0;

const evenGame = () => {
  for (let i = 1; i <= 3; i += 1) {
    const num = getRandomArbitrary(100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer:');
    const reverseAnswer = (answer === 'yes' ? 'no' : 'yes');

    if ((checkEven(num) && answer === 'yes') || (!checkEven(num) && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${reverseAnswer}.\nLet's try again, ${name}!`);
      break;
    }

    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default evenGame;
