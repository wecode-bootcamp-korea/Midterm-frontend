import { useState } from "react";

export function useInput(initialValue) {
  const [newInput, setNewInput] = useState(initialValue);

  const saveNewInput = ({ target }) => {
    const { name, value } = target;
    setNewInput((prev) => ({ ...prev, [name]: value }));
  };

  const inputReset = () => {
    setNewInput(initialValue);
  };

  return [newInput, saveNewInput, inputReset];
}
