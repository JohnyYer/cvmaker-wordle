import * as styles from "./styles.css";

type Props = {
  children: string;
  onClick: () => void;
};

const ButtonLink = ({ children, onClick }: Props) => {
  return (
    <button className={styles.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonLink;
