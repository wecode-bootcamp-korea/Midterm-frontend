import { useState } from "react";

export const useInput = (initialValue) => {
  const [newInfo, setNewInfo] = useState(initialValue);
  const handleInput = ({ target }) => {
    const { name, value } = target;
    setNewInfo((prev) => ({ ...prev, [name]: value }));
  };
  const emptyInput = () => setNewInfo(initialValue);
  const { name, email, company, city } = newInfo;
  const isUserInfoValid = name && email && company && city;
  return { newInfo, handleInput, emptyInput, isUserInfoValid };
};
