import Button from "../button";
import * as styles from "./styles.css";

type Props = {
  open: boolean;
  emoji: string;
  heading: string;
  text: string;
  buttonText: string;
  onClick: () => void;
};

const Dialog = ({ open, emoji, heading, text, buttonText, onClick }: Props) => {
  return (
    <dialog open={open} className={styles.root}>
      <div className={styles.icon}>{emoji}</div>

      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.text}>{text}</p>
      <form method="dialog">
        <Button onClick={onClick}>{buttonText}</Button>
      </form>
    </dialog>
  );
};

export default Dialog;
