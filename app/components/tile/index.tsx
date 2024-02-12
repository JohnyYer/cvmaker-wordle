import { LetterStatus } from "~/types";
import * as styles from "./styles.css";
import { clsx } from "clsx";

type Props = {
  letter: string;
  status?: LetterStatus;
};

const Tile = ({ letter, status }: Props) => {
  const classes = clsx(styles.root, {
    [styles.match]: status === "match",
    [styles.exists]: status === "exists",
    [styles.miss]: status === "miss",
  });
  return <div className={classes}>{letter}</div>;
};

export default Tile;
