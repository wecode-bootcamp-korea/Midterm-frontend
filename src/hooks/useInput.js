import { useState } from "react";

const useInput = (initialInfo) => {
  const [newInfo, setNewInfo] = useState(initialInfo);

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setNewInfo((prev) => ({ ...prev, [name]: value }));
  };

  const initInfo = () => {
    setNewInfo(initialInfo);
  };

  return [newInfo, initInfo, handleInput];
};

export default useInput;
