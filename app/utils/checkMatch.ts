import { GridItems, LetterStatus } from "~/types";

const getStatus = (letter: string, letterIndex: number, word: string) => {
  let status: LetterStatus;

  // For the word "apple", when the guess is "allee", only the initial "a" and the final
  //  "e" in "allee" should be highlighted in green. The two "l's" and the first "e"
  //  in "allee" should remain without any highlighting.

  // Why two "l's" should remain without any highlighting? l exists in word "apple" so it should be marked as orange?

  const letterPosition = word.indexOf(letter);

  if (letterPosition === -1) {
    status = "miss";
  } else {
    if (word[letterIndex] === letter) {
      status = "match";
    } else {
      status = "exists";
    }
  }

  return status;
};

export const checkMatch = (word: string, guess: GridItems[], step: number) => {
  // To prevent unnecessary iterations use only 1 row to check
  const guessString = guess.slice(step - 5, step);

  const checkedLetters = guessString.map(
    ({ letter }, letterIndex) =>
      ({
        letter,
        status: getStatus(letter, letterIndex, word),
      } as GridItems)
  );

  return [...guess.slice(0, step - 5), ...checkedLetters, ...guess.slice(step)];
};

export const checkWin = (guess: GridItems[], step: number) => {
  const guessString = guess.slice(step - 5, step);

  console.log(guessString);

  return guessString.every(({ status }) => status === "match");
};

export const checkLose = (step: number) => {
  return step === 25;
};
