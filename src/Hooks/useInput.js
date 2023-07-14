import { useState } from "react";

const useInput = (initialInfo) => {
  const [userData, setUserData] = useState(initialInfo);

  const handleData = ({ target }) => {
    const { name, value } = target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const initState = () => {
    setUserData(initialInfo)
  }
  return [userData, handleData, initState];
};

export default useInput;
