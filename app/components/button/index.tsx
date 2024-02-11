import { Link } from "@remix-run/react";
import * as styles from "./styles.css";

type Props = {
  to: string;
  children: string;
};

const ButtonLink = ({ to, children }: Props) => {
  return (
    <Link to={to} className={styles.root}>
      {children}
    </Link>
  );
};

export default ButtonLink;
