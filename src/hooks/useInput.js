import { useState } from "react";

const useInput = (value) => {
  //input값을 담아줄 state
  const [newInfo, setNewInfo] = useState(value);

  //input값 변경시 갱신해줄 핸들러
  const handleInput = ({ target }) => {
    const { name, value } = target;
    setNewInfo((prev) => ({ ...prev, [name]: value }));
  };

  const initValue = (value) => {
    setNewInfo(value);
  };
  return [initValue, handleInput, newInfo];
};

export default useInput;
