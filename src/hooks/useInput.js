import { useState } from "react";

const useInput = (initValue) => {
  const [inputData, setInputData] = useState(initValue);

  const handleInput = ({ target }) => {
    console.log(target);
    const { name, value } = target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const initState = () => {
    setInputData(initValue);
  };

  return [inputData, handleInput, initState];
};

export default useInput;
