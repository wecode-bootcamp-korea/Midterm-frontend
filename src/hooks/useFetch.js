import { useEffect, useState } from "react";

const useFetch = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  return [userInfo];
};

export default useFetch;
