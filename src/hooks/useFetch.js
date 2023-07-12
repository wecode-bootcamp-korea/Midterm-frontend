import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [url]);

  return [userInfo];
};

export default useFetch;
