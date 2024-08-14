import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

export function useTypedSelector() {
  return useSelector<RootState>;
}
