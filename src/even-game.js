import readlineSync from 'readline-sync';

const evenGame = () => {
  // greeting user and get her name
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  // get random number
  const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

  // check number is even or not
  const checkEven = (checkNum) => checkNum % 2 === 0;

  for (let i = 1; i <= 3; i += 1) {
    const num = getRandomArbitrary(0, 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === 'yes' || answer === 'no') {
      if ((answer === 'yes' && checkEven(num)) || (answer === 'no' && !checkEven(num))) {
        console.log('Correct!');
      } else if (answer === 'no' && checkEven(num)) {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
        break;
      } else if (answer === 'yes' && !checkEven(num)) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        break;
      }
    } else {
      console.log(`'${answer}' is wrong answer, please use only 'yes' or 'no'.\nLet's try again, ${name}`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default evenGame;
