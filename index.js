// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    counter1 is a function that returns a nested function that increments count, while counter2 is a function that increments count.
 * 2. Which of the two uses a closure? How can you tell?
 *    counter1 uses a closure, because it nests a function inside of itself that is returned in order to do a task.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    counter1 may be preferable in situations where you want to increment multiple different variables by calling the counterMaker function multiple times,
 *    where counter2 is preferable in situation where you are just increment a single variable (count).
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * 3);
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callback, innings) {
  let homeTeamScore = 0, awayTeamScore = 0;
  for (let i = 1; i <= innings; i++) {
    homeTeamScore += callback();
    awayTeamScore += callback();
    //console.log(`${i} inning(s) have been played, the score is ${homeTeamScore} to ${awayTeamScore}`);
  }
  const gameScore = {
    "Home": homeTeamScore,
    "Away": awayTeamScore,
  };
  return gameScore;
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(callback) {
  return callback();
}

function scoreboard(callback1, callback2, innings) {
  let homeTeamScore = 0, awayTeamScore = 0;
  for (let i = 1; i <= innings; i++) {
    homeTeamScore += callback1(callback2), awayTeamScore += callback1(callback2);
    if (i === 1) {
      console.log(`${i}st inning: ${awayTeamScore} - ${homeTeamScore}`);
    } else if (i === 2) {
      console.log(`${i}nd inning: ${awayTeamScore} - ${homeTeamScore}`);
    } else if (i === 3) {
      console.log(`${i}rd inning: ${awayTeamScore} - ${homeTeamScore}`);
    } else {
      console.log(`${i}th inning: ${awayTeamScore}- ${homeTeamScore}`);
    }
  }
  return `Final Score: ${awayTeamScore} - ${homeTeamScore}`;
}
console.log(scoreboard(getInningScore, inning, 9));