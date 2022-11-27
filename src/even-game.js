import readlineSync from 'readline-sync';

const answerArray = ['yes', 'no'];
let answer = '';
let name = '';
let num = 0;
let reverseAnswer = '';
let score = 0;

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
const CorrectYes = (checkNum, userAnswer) => checkEven(checkNum) && userAnswer === answerArray[0];
const CorrectNo = (checkNum, userAnswer) => !checkEven(checkNum) && userAnswer === answerArray[1];

const getAnswer = () => {
  answer = readlineSync.question('Your answer:');
  reverseAnswer = (answer === answerArray[0] ? answerArray[1] : answerArray[0]);
};

const correctMessage = () => {
  console.log('Correct!');
  score += 1;
};

const errorMessage = (userAnswer, reverse, UserName, checkNum) => {
  if (answerArray.includes(userAnswer)) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${reverse}.\nLet's try again, ${UserName}!`);
  } else if (checkEven(checkNum)) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answerArray[0]}.\nLet's try again, ${UserName}!`);
  } else if (!checkEven(checkNum)) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answerArray[1]}.\nLet's try again, ${UserName}!`);
  }
};

const checkAnswer = (checkNum, userAnswer) => CorrectYes(checkNum, userAnswer)
  || CorrectNo(checkNum, userAnswer);

const gameRound = () => {
  question();
  getAnswer();
  if (checkAnswer(num, answer)) {
    correctMessage();
    checkScore();
  } else {
    return errorMessage(answer, reverseAnswer, name, num);
  }
};

const checkScore = () => {
  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    gameRound();
  }
};

const evenGame = () => {
  greeting();
  gameRound();
};

export default evenGame;
