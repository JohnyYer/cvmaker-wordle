import { Outlet } from "@remix-run/react";
import * as styles from "./game-board.css";
import Tile from "~/components/tile";
import { useEffect } from "react";

const GameBoard = () => {
  const gridItems = new Array(25).fill("");

  useEffect(() => {
    document.addEventListener("keyup", function (event) {
      if (event.code.includes("Key")) {
        console.log(event);
      }
    });
  }, []);

  return (
    <main className={styles.root}>
      <div className={styles.grid}>
        {gridItems.map(({ letter, status }, index) => (
          <Tile key={index} />
        ))}
      </div>
      <Outlet />
    </main>
  );
};

export default GameBoard;
