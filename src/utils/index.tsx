import { ChangeEvent } from "react";

// dummy function
export const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
  console.log(e.target.value);
};
