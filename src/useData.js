import { useContext } from "react";
import { GlobalContext } from "./App";

export default function useData() {
  const data = useContext(GlobalContext);
  return data;
}
