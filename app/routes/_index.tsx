import type { MetaFunction } from "@remix-run/node";
import Button from "~/components/button";

export const meta: MetaFunction = () => {
  return [
    { title: "CV Maker Wordle Clone" },
    { name: "description", content: "Assignment" },
  ];
};

export default function Index() {
  return <Button />;
}
