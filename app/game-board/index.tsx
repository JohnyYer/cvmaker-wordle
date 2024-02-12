import { Outlet, json } from "@remix-run/react";
import * as styles from "./index.css";
import Tile from "~/components/tile";
import { useEffect, useState } from "react";
import { GridItems } from "~/types";
import { checkLose, checkMatch, checkWin } from "~/utils/checkMatch";

export async function loader() {
  const res = await fetch(
    "https://random-word-api.herokuapp.com/word?length=5"
  );
  return json(await res.json());
}

const GameBoard = () => {
  const gridItems = new Array(25).fill("").map((letter) => ({
    letter,
  }));
  const [guessString, setGuessString] = useState<GridItems[]>(gridItems);
  const [step, setStep] = useState(0);
  const [pause, setPause] = useState(false);

  // const winWord = useLoaderData<typeof loader>();
  const winWord = ["apple"];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      // Prevent repeating on key pressed
      if (event.repeat) return;

      if (!pause) {
        // Check if it is letter; Excluding special symbols + digits
        if (event.code.includes("Key") && step <= 24) {
          // We need to pause game once user entered 5 letters
          if ((step + 1) % 5 === 0) {
            setPause(true);
          }
          guessString[step].letter = event.key;
          setGuessString([...guessString]);

          setStep((prevStep) => prevStep + 1);
        }
      } else {
        if (event.key === "Enter") {
          const checkedResults = checkMatch(winWord[0], guessString, step);
          setGuessString(checkedResults);

          if (checkWin(checkedResults, step)) {
            alert("win");
          }

          if (checkLose(step)) {
            alert("lose");
          }
          setPause(false);
        }
      }

      // Handle backspace
      if (event.key === "Backspace" && step !== 0) {
        guessString[step - 1].letter = "";
        setStep((prevStep) => prevStep - 1);
        setGuessString([...guessString]);
        setPause(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [step, pause, guessString]);

  return (
    <main className={styles.root}>
      <div className={styles.grid}>
        {guessString.map(({ letter, status }, index) => (
          <Tile key={index} letter={letter} status={status} />
        ))}
      </div>
      <Outlet />
    </main>
  );
};

export default GameBoard;
