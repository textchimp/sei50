console.log('Word Guesser ');

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
//     Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//                    i =   0    1    2    3
const secretWordLetters = ['T', 'E', 'S', 'T'];  // word to be guessed, in array form
const guessedLetters    = ['_', '_', '_', '_'];
let correctGuessCounter = 0;

//     Write a function called guessLetter that will:
//     Take one argument, the guessed letter.

const guessLetter = function( userGuess ){

  // debugger;

  console.log('in guessLetter(), argument userGuess = ', userGuess);

  // Use this variable to remember what happens in the loop, overall -
  // were ANY of the letters in the secret word a match against the user's guess
  let correctGuessMade = false;

  //     Iterate through the word letters...
  for( let i = 0; i < secretWordLetters.length; i++ ){

    const currentSecretLetter = secretWordLetters[ i ];
    // console.log('currentSecretLetter', currentSecretLetter);

    // ....and see if the guessed letter is in there.
    if( currentSecretLetter === userGuess ){

      //  If the guessed letter matches a word letter, change the guessed letters array to reflect that.
      console.log('Correct guess!');
      guessedLetters[ i ] = userGuess; // fill in the corresponding blank in the same "column"
      console.log( 'Guessed letters:', guessedLetters.join(' ') );
      correctGuessMade = true; // remember that at least one correct guess was made
      correctGuessCounter++; // another correct guess!  correctGuessCounter = correctGuessCounter + 1;
    }
    // else {
    //   // guess was incorrect - TOO SOON TO SAY!!
    //   // We can't tell the use the guess was incorrect UNTIL THE LOOP IS FINISHED!
    //   console.log('%cIncorrect guess for ', 'color: red', userGuess);
    // }


  } // for each letter in the secret word


  // AFTER THE LOOP is the only place we'll know for sure if a guess was OVERALL correct or incorrect
  if( correctGuessMade === false ){
    // if the correctGuessMade variable still has its initial false value,
    // this means that NONE of the letters in the secret word matched the guess letter,
    // i.e. NONE of the loop iterations triggered the conditional code that changed correctGuessMade to true
    console.log('Sorry, bad guess!');
  }

  // Is the game over?
  if( correctGuessCounter === secretWordLetters.length ){
    console.log('YOU WIN!!!!! CONGRATULATIONS 🎉');
  }


}; // guessLetter()


guessLetter( 'E' );







//     When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
//     It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
//     Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
