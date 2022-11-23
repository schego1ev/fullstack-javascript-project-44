import readlineSync from 'readline-sync';

let name;
let answer;
const answerArray = ['yes', 'no'];
let num;
let reverseAnswer;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
};

const getRandomArbitrary = (max) => Math.floor(Math.random() * max);

const question = () => {
  num = getRandomArbitrary(100);
  console.log(`Question: ${num}`);
};

const checkEven = (checkNum) => checkNum % 2 === 0;

const CorrectYes = (checkNum, UserAnswer) => checkEven(checkNum) && UserAnswer === answerArray[0];
const CorrectNo = (checkNum, UserAnswer) => !checkEven(checkNum) && UserAnswer === answerArray[1];

const errorMessage = (UserAnswer, reverse, UserName, checkNum) => {
  if (answerArray.includes(UserAnswer)) {
    console.log(`${UserAnswer} is wrong answer ;(. Correct answer was ${reverse}.\nLet's try again, ${UserName}!`);
  } else if (checkEven(checkNum)) {
    console.log(`${UserAnswer} is wrong answer ;(. Correct answer was ${answerArray[0]}.\nLet's try again, ${UserName}!`);
  } else if (!checkEven(checkNum)) {
    console.log(`${UserAnswer} is wrong answer ;(. Correct answer was ${answerArray[1]}.\nLet's try again, ${UserName}!`);
  }
};

const getAnswer = () => {
  answer = readlineSync.question('Your answer:');
  reverseAnswer = (answer === answerArray[0] ? answerArray[1] : answerArray[0]);
};

const evenGame = () => {
  greeting();
  for (let i = 1; i <= 3; i += 1) {
    question();
    getAnswer();

    if (CorrectYes(num, answer) || CorrectNo(num, answer)) {
      console.log('Correct!');
    } else {
      return errorMessage(answer, reverseAnswer, name, num);
    }

    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default evenGame;
