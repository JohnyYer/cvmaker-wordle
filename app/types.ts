export type LetterStatus = "match" | "exists" | "miss";

export type GridItems = {
  letter: string;
  status?: LetterStatus;
};
