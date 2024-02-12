import { LetterStatus } from "~/types";
import * as styles from "./styles.css";
import { clsx } from "clsx";

type Props = {
  letter: string;
  status?: LetterStatus;
  index: number;
};

const Tile = ({ letter, status, index }: Props) => {
  const classes = clsx(styles.root, {
    [styles.match]: status === "match",
    [styles.exists]: status === "exists",
    [styles.miss]: status === "miss",
  });
  return (
    <div
      className={classes}
      aria-label={`${index + 1} letter, ${status || "empty"}`}
      aria-roledescription="tile"
    >
      {letter}
    </div>
  );
};

export default Tile;
